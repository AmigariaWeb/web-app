import router from '../router';
import { defineStore } from "pinia";
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { swal } from '../utils/swal';
import { addUpdateUser, getUser } from '../services/firebase/crud';

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: null,
    isAssociation:false,
    isAdmin:false
  }),
  getters: {
    isEmailVerified: (state) => {
      if (state.user) {
        if (state.user.emailVerified) {
          return true
        }
      }
      return false
    }
  },
  actions: {
    SET_USER(user) {
      this.user = user;
    },
    CLEAR_USER() {
      this.user = null;
      this.isAssociation=false,
      this.isAdmin=false
    },

    async createNewUser(user) {
      const newUser = {
        uid: user.uid,
        name: user.displayName,
        isAdmin: false,
        email: user.email,
        image: user.photoURL,
        description: null,
        location: null,
        userActivities: [],
        joinedActivities: [],
        joinedWorkshops: []
      }
      try {
        await addUpdateUser(newUser);
      } catch (error) {
        console.error(error);
      }
    },

    async updateUser(user) {
      try {
        await addUpdateUser(user)
      } catch (error) {
        console.log(error);
      }
    },

    async login(details) {
      const { email, password } = details
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            swal("error", "Usuario no encontrado", "El usuario introducido no existe.")
            break;
          case "auth/wrong-password":
            swal("error", "Contraseña erronea", "La contraseña introducida es erronea. ¡Prueba con otra diferente!.")
            break
          default:
            swal("error", "Algo ha ido mal", "")
            break;
        }
        return
      }
      if (!auth.currentUser.emailVerified) {
        await auth.signOut();
        swal("info", "Verifica primero tu email", "Te hemos enviado un correo de confirmación. Si no lo encuentras, mira en tu bandeja de spam.")
        this.CLEAR_USER();
        router.push("/login")
        return
      }
      try {
        if (auth.currentUser) {
          const user = await getUser(auth.currentUser);
          this.SET_USER(user);
          if(this.user.isAssociation){
            router.push('/workshops')
            return;       
          }
        }
        router.push('/')
      } catch (error) {
        return swal("error", "El usuario no existe", "")
      }

    },

    async register(details) {
      const { email, password } = details
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            swal("error", "El email ya está en uso", "Prueba con otro diferente o intenta iniciar sesión");
            break;
          case "auth/invalid-email":
            swal("error", "Email incorrecto", "Introduce un email válido.");
            break
          case "auth/operation-not-allowed":
            swal("error", "Operación no permitida", "");
            break
          case "auth/weak-password":
            swal("error", "Contraseña debil", "Pon una contraseña con mínimo 6 caracteres");
            break
          default:
            console.error(error);
            break;
        }
        return
      }
      const actionCodeSettings = {
        url: `https://amigaria-app.vercel.app/`
      }
      await sendEmailVerification(auth.currentUser, actionCodeSettings);
      swal("success", "Registrado con éxito", "Ahora confirma tu correo electrónico. Si no lo encuentras busca en la bandeja de spam.")
      this.createNewUser(auth.currentUser);
      auth.signOut();
      router.push("/login");
    },

    async resetPassword() {
      await sendPasswordResetEmail(auth, this.user.email)
        .then(() => {
          swal("info", "Comprueba tu email", "Para cambiar la contraseña comprueba tu correo electrónico.");
        })
        .catch((error) => {
          swal("error", "Algo ha salido mal", "No se ha podido cambiar la contraseña");
        });
    },

    async logout() {
      const confirmLogout = async () => {
        await signOut(auth);
        this.CLEAR_USER();
        router.push('/login');
      }
      swal(
        'confirm',
        '¿Quieres cerrar sesión',
        '',
        confirmLogout,
        false
      ) 
    },

    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
      let user = null;
      user = await getUser(auth.currentUser)
      if (!user) {
        this.createNewUser(auth.currentUser);
        user = await getUser(auth.currentUser)
      }
      this.SET_USER(user);
      if(this.user.isAssociation){
        router.push('/workshops')
        return;       
      }
      router.push("/")
    },

    fetchUser() {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          await signOut(auth);
          this.CLEAR_USER();
        } else {
          const userDB = await getUser(auth.currentUser);
          this.SET_USER(userDB);
        }
      })
    },
    async setAdmin(){
      if(this.user){
        let user = await getUser(this.user)
        if(user.isAdmin){
            this.isAdmin = true;
        }
      }
    },
    async setAssociation(){
      if(this.user){
        let user = await getUser(this.user)
        if(user.isAssociation){
            this.isAssociation = true;
        }
      }
    }
  },
});
