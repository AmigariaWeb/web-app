import router from '../router';
import { defineStore } from "pinia";
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: null,
  }),
  getters: {
    actualUser: (state) => console.log(state.user)
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
      this.SET_USER(auth.currentUser);
      router.push("/");
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
      this.SET_USER(auth.currentUser)
      router.push("/");
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
          this.CLEAR_USER();
        } else {
          this.SET_USER(auth.currentUser);
        }
      })
    }
  },
});
