<script setup>
import { ref, watch, nextTick } from 'vue'
import Message from './Message.vue'
import { useChat } from '../../services/firebase/messages';
import { useUserStore } from '../../stores/useUserStore';
import SendIcon from './SendIcon.vue';

const props = defineProps({
  activity:{
    type: Object
  }
})

const userStore = useUserStore();
const { messages, sendMessage } = useChat(userStore, props.activity)

const bottom = ref(null)
watch(
  messages,
  () => {
    nextTick(() => {
      bottom.value?.scrollIntoView({ behavior: 'smooth' })
    })
  },
  { deep: true }
)

const message = ref('')
const send = () => {
  sendMessage(message.value)
  message.value = ''
}
</script>

<template>
  <Message
    v-for="{ id, text, userPhotoURL, userName, userId } in messages"
    :key="id"
    :name="userName"
    :photo-url="userPhotoURL"
    :sender="userId === userStore.user?.uid"
  >
    {{ text }}
  </Message>
  <div ref="bottom" />

  <div class="bottom">
    <form @submit.prevent="send">
      <input v-model="message" placeholder="Message" required />
      <button type="submit">
        <SendIcon class="send-icon"/>
      </button>
    </form>
  </div>
</template>

<style lang="scss">
  .send-icon{
    width: 20px;
    height: 20px;
  }
</style>