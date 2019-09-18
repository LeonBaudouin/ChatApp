<template>
    <div class="message-list" ref="list" v-chat-scroll>
        <Message v-for="(message, index) in messages" :message='message' :key='index'></Message>
        <div v-if="isUserTyping" class="typing-hint">...</div>
    </div>
</template>

<script>
import Message from './MessageList/Message'
import store from '../store'

export default {
    computed: {
        messages() {
            return store.$data.messages
        },
        isUserTyping() {
            return store.$data.userTyping.typing
        }
    },
    components: {
        Message
    }
}
</script>

<style lang="scss">
.message-list {
    overflow-y: scroll;
}
</style>