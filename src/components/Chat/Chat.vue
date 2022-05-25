<script setup>
import { ref, watch, nextTick } from 'vue'
import Message from './Message.vue'
import { useChat } from '../../services/firebase/messages'
import { useUserStore } from '../../stores/useUserStore'
import SendIcon from './SendIcon.vue'

const props = defineProps({
  activity: {
    type: Object,
  },
})

const userStore = useUserStore()
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
  <div class="chat-container">
    <p class="chat-title">Chat</p>
    <div class="messages-container">
      <p class="empty-message" v-if="messages === ''">Aún no hay mensajes</p>
      <Message
        v-else
        v-for="{ text, image, userName, userId, index } in messages"
        :key="index"
        :userName="userName"
        :image="image"
        :sender="userId === userStore.user?.uid"
      >
        {{ text }}
      </Message>
    <div ref="bottom" />
    </div>

    <div class="bottom">
      <form @submit.prevent="send">
        <input v-model="message" placeholder="Mensaje..." required />
        <button type="submit">
          <SendIcon class="send-icon" />
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-title {
  color: var(--clr-emphasis-light);
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  padding-block: 0.5rem;
  border-bottom: 3px solid var(--clr-green-light);
}
.messages-container {
  padding-block: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 20rem;
  min-height: 7rem;
  overflow-y: scroll;
  overflow-x: hidden;

  .empty-message {
    color: var(--clr-emphasis-light);
    font-size: 1.1rem;
    text-align: center;
  }
}

.bottom {
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
  }
}
input {
  width: 95%;
  height: 44px;
  border: 3px solid transparent;
  padding-inline: 0.5rem;
  border-radius: 20px 0px 0px 20px;

  &::placeholder {
    font-size: 1.1rem;
    font-family: 'AtkinsonHyperlegible';
  }
}

button {
  border-radius: 0px 20px 20px 0px;
  width: 4rem;
  height: 44px;
  background-color: transparent;
  border: none;
  border-left: 3px solid var(--clr-green-light);
}
.send-icon {
  border-radius: 0px 20px 20px 0px;
  color: var(--clr-dark-blue);
  background-color: var(--clr-emphasis-light);
  width: inherit;
  height: inherit;
  padding: 0.5rem;
}
</style>
