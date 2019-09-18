<template>
    <div class="message-list" ref="list" v-chat-scroll>
        <Message v-for="(message, index) in messages" :message='message' :key='index'></Message>
        <div v-if="isUserTyping" class="typing-hint">...</div>
        <Message v-if="loadingMessage" :message='loadingMessage'></Message>
    </div>
</template>

<script>
import Message from './MessageList/Message'
import store from '../store'

export default {
    computed: {
        messages() {
            return store.messages
        },
        isUserTyping() {
            return store.userTyping.typing
        },
        loadingMessage() {
            return store.loadingMessage
        }
    },
    components: {
        Message
    }
}
</script>

<style lang="scss">
.message-list {
    display: flex;
    flex-direction: column;
    padding: 0 100px;
}
</style>