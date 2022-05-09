import router from '../router';
import { defineStore } from "pinia";
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from 'firebase/auth';
import { swal } from '../utils/swal';

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: null,
  }),
  getters: {
    actualUser: (state) => console.log(state.user),
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
    },

    async login(details) {
      const { email, password } = details
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            swal("error","Usuario no encontrado", "El usuario introducido no existe.")
            break;
          case "auth/wrong-password":
            swal("error","Contraseña erronea", "La contraseña introducida es erronea. ¡Prueba con otra diferente!.")
            break
          default:
            swal("error","Algo ha ido mal", "")
            break;
        }
        return
      }
      if (!auth.currentUser.emailVerified) {
        await auth.signOut();
        swal("info","Verifica primero tu email","Te hemos enviado un correo de confirmación. Si no lo encuentras, mira en tu bandeja de spam.")
        this.CLEAR_USER();
        router.push("/login")
        return
      }
      this.SET_USER(auth.currentUser);
      router.push('/')
      
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
            swal("error","Email incorrecto", "Introduce un email válido.");
            break
          case "auth/operation-not-allowed":
            swal("error","Operación no permitida", "");
            break
          case "auth/weak-password":
            swal("error","Contraseña debil","Pon una contraseña con mínimo 6 caracteres");
            break
          default:
            console.error(error);
            break;
        }
        return
      }
      const actionCodeSettings = {
        url: `https://app.amigaria.com`
      }
      await sendEmailVerification(auth.currentUser, actionCodeSettings);
      swal("success","Registrado con éxito","Ahora confirma tu correo electrónico. Si no lo encuentras busca en la bandeja de spam.")
      auth.signOut();
      router.push("/login");
    },

    async logout() {
      await signOut(auth);
      this.CLEAR_USER();
      router.push('/login');
    },

    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
      this.SET_USER(auth.currentUser);
      router.push("/")
    },
    
    fetchUser() {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          await signOut(auth);
          this.CLEAR_USER();
        } else {
          this.SET_USER(auth.currentUser);
        }
      })
    }
  },
});
