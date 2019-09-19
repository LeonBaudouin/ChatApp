<template>
    <div class="message-list" ref="list" v-chat-scroll>
        <div v-if="isUserTyping" class="typing-hint">
            <span class="typing-hint-ball"></span>
            <span class="typing-hint-ball"></span>
            <span class="typing-hint-ball"></span>
        </div>
        <MessageGroup
            v-for="(messageGroup, index) in messages"
            :key="index" 
            :messages="messageGroup.messages"
            :user="messageGroup.user"
            class="sub-list"
        ></MessageGroup>
    </div>
</template>

<script>
import store from '../store'
import MessageGroup from './MessageList/MessageGroup'

export default {
    computed: {
        messages() {
            return store.messages
        },
        isUserTyping() {
            return store.userTyping.typing
        }
    },
    components: {
        MessageGroup
    }
}
</script>

<style lang="scss">
.message-list, .sub-list {
    display: flex;
    flex-direction: column-reverse;
}

.message-list {
    height: 100%;
    overflow-y: auto;
    padding: 0 100px 30px 100px;
}

.typing-hint {
    position: relative;
    top: 30px;
    &-ball {
        position: relative;
        display: inline-block;
        border-radius: 50%;
        width: 7px;
        height: 7px;
        background-color: var(--theme-color);
        animation: typing-hint-ball 500ms ease-in alternate infinite;

        &:nth-child(2) {
            margin: 0 4px;
            animation-delay: 100ms;
        }

        &:nth-child(3) {
            animation-delay: 200ms;
        }
    }
}

@keyframes typing-hint-ball {
    0% {
        transform: translateY(-10px)
    }
    100% {
        transform: translateY(0)
    }
}
</style>