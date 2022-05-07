import router from '../router';
import { defineStore } from "pinia";
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from 'firebase/auth';

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
            alert("User not found")
            break;
          case "auth/wrong-password":
            alert("Wrong password")
          default:
            alert("Something went wrong")
            break;
        }
        return
      }
      if (!auth.currentUser.emailVerified) {
        await auth.signOut();
        alert("Verifica tu email para entrar. Si no ves en la bandeja de entrada el correo de confirmación, comprueba en spam")
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
            alert("Email already in use")
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break
          case "auth/weak-password":
            alert("Weak password");
            break
          default:
            alert(error);
            break;
        }
        return
      }
      const actionCodeSettings = {
        url: `https://app.amigaria.com`
      }
      await sendEmailVerification(auth.currentUser, actionCodeSettings);
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
