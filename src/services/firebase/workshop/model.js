import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { db, storage } from '@/services/firebase';
import { async } from "@firebase/util";

export const addNewImageWorkshop = async (file, name) => {
  try {
    const imageRef = ref(storage, name);
    let result =  await uploadBytes(imageRef, file);
    return result
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export const getImageWorkshop = async (urlImage) => {
  try {
    let refUrlImage;
    if(urlImage){
      const path = `gs://amigaria-app.appspot.com/${urlImage}`
      const gsReference =  ref(storage, path);
      refUrlImage =  await getDownloadURL(gsReference)
      
    }
    return refUrlImage
      } catch (error) {
    console.error("Error adding document: ", error);
  }
}


export const addNewWorkshop = async (newWorkshop) => {
  try {
    console.log("Document ", newWorkshop);
    
    const docRef =  await addDoc(collection(db, "workshops"), newWorkshop);
    console.log("Document written");

    // this.updateWorkshop(newWorkshop, docRef.id )

    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
export const getAllWorkshops = async () => {
  try {
    let workshops = [];
    let docs = await getDocs(collection(db, "workshops"))
      docs.forEach( doc => {
        workshops.push(doc.data())
      })
    return  workshops;
  } catch (error) {
    return console.error("Error getting documents ", error);
  }
}