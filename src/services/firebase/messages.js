

import {  doc, onSnapshot, updateDoc } from "firebase/firestore";
import { ref, onUnmounted } from 'vue'
import { db } from '@/services/firebase';
import { storeToRefs } from 'pinia';

export function useChat(userStore, activity) {
  console.log(activity);
  // Localstorage
  const { user } = storeToRefs(userStore)
  if (user.value === null) {
    user.value = JSON.parse(localStorage.getItem('localUser'))
  }

  const activitiesDoc = doc(db, 'activities', activity.id)
  const messages = ref([])
  const refActivity = ref(null)
  const isDisabled = ref(true)
  const unsubscribe = onSnapshot(activitiesDoc, (doc) => {
    refActivity.value = doc.data()
    refActivity.value.messages.length > 0
      ? messages.value = (refActivity.value.messages)
      : messages.value = ""
    refActivity.value.isAssigned
      ? isDisabled.value = false
      : isDisabled.value = true
  })
  onUnmounted(unsubscribe)


  const sendMessage = async text => {
    const newMessage = {
      image: user.value.image,
      text: text,
      userId: user.value.uid,
      userName: user.value.name,
      createdAt: new Date().toISOString()
    }

    user.value.joinedActivities.forEach(joinedActivity => {
      if (joinedActivity.id === refActivity.value.id) {
        refActivity.value.messages.push(newMessage)
      }
    })

    user.value.userActivities.forEach(createdActivity => {
      if (createdActivity.id === refActivity.value.id) {
        refActivity.value.messages.push(newMessage)
      }
    })


    const docRef = await updateDoc(activitiesDoc, {
      messages: refActivity.value.messages
    })
  }

  return { messages, sendMessage, isDisabled }
}
