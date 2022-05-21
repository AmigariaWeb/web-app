
import { useUserStore } from '../../stores/useUserStore';
import { addDoc, arrayUnion, collection, doc, getDoc, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { ref, onUnmounted, onBeforeMount } from 'vue'
import { db } from '@/services/firebase';
import { storeToRefs } from 'pinia';

export function useChat(userStore, activity) {
  // Localstorage
  const { user } = storeToRefs(userStore)
  if (user.value === null) {
    user.value = JSON.parse(localStorage.getItem('localUser'))
  }

  const userDoc = doc(db, 'users', user.value.uid)
  const messages = ref([])
  const refActivity = ref(null)
  const unsubscribe = onSnapshot(userDoc, (doc) => {
    const { joinedActivities } = doc.data()
    const [joinedActivity] = joinedActivities.filter(joinedActivity => joinedActivity.id === activity.id)
    refActivity.value = joinedActivity

    if (refActivity.value) {
      refActivity.value.messages
        ? messages.value = (refActivity.value.messages)
        : messages.value = ""
    }
  })
  onUnmounted(unsubscribe)



  const sendMessage = async text => {
    const newMessage = {
      text: text,
      createdAt: new Date().toISOString()
    }
    user.value.joinedActivities.forEach(joinedActivity => {
      joinedActivity.id === refActivity.value.id
      joinedActivity.messages.push(newMessage)
    })

    const docRef = await updateDoc(userDoc, {
      joinedActivities: user.value.joinedActivities
    })
  }

  return { messages, sendMessage }
}
