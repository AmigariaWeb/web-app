import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '@/services/firebase';

export const addNewWorkshop = async (newWorkshop) => {
  try {
    const docRef = await addDoc(collection(db, "workshops"), newWorkshop);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
