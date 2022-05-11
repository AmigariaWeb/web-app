import { collection, addDoc, getDocs, setDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '@/services/firebase';


// ACTIVITIES
export const addNewActivity = async (newActivity) => {
  try {
    const docRef = await addDoc(collection(db, "activities"), newActivity);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export const getAllActivities = () => {
  try {
    return getDocs(collection(db, "activities"));

  } catch (error) {
    return console.error("Error getting documents ", error);
  }
}

export const deleteActivityById = async (activityId) => {
  try {
    await deleteDoc(doc(db, "activities", activityId));
  } catch (error) {
    console.error(error);
  }
}


//USERS
export const addUpdateUser = async (newUser) => {
  const { uid } = newUser;
  try {
    await setDoc(doc(db, "users", uid), newUser);
  }
  catch (error) {
    return console.error("Error adding documents ", error);
  }
}

export const getUser = async (user) => {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}