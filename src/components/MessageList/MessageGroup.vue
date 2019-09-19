<template>
    <div class="message-group" :class="{'from-me': isFromMe, 'from-other': !isFromMe }" >
        <Avatar :user="user" class="side-avatar"></Avatar>
        <Message v-for="(message, index) in messages" :message='message' :key='index'></Message>
        <span class="group-username">{{ user.username }}</span>
    </div>
</template>

<script>
import Message from './Message'
import Avatar from '../UserList/Avatar'
import store from '../../store'

export default {
    props: {
        user: Object,
        messages: Array
    },
    computed: {
        isFromMe() {
            return this.user.username == store.user.username
        }
    },
    components: {
        Message,
        Avatar
    }
    
}
</script>

<style lang="scss">

.message-group {

    margin-top: 40px;
    position: relative;

    .side-avatar {
        position: absolute;
        bottom: 0;
    }

    .group-username {
        font-size: 0.8rem;
        font-weight: 300;
        position: absolute;
        top: 100%;
    }

    &.from-other {
        .side-avatar {
            right: calc(100% + 12.5px);
        }

        .group-username {
            left: 0;
        }
    }

    &.from-me {
        .side-avatar {
            left: calc(100% + 12.5px);
        }

        .group-username {
            right: 0;
        }
    }
}
        
</style>