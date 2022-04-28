import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '@/services/firebase';

export const addNewActivity = async (newActivity) => {
  try {
    const docRef = await addDoc(collection(db, "activities"), newActivity);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getAllActivities = () => {
  try {
    return getDocs(collection(db, "activities"));
    
  } catch (error) {
    return console.error("Error getting documents ", e);
  }
}
