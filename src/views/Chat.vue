<template>
    <div class="row chat">
        <div class="col-3 user-list">
            <UserList></UserList>
        </div>
        <div class="col-9 message-space">
            <MessageList></MessageList>
            <MessageBox></MessageBox>
        </div>
    </div>
</template>

<script>
import UserList from '../components/UserList'
import MessageBox from '../components/MessageBox'
import MessageList from '../components/MessageList'

export default {
    components: {
        UserList,
        MessageBox,
        MessageList
    }
}
</script>

<style lang="scss">
.chat {
    height: 100vh;  
}

.user-list {
    height: 100%;
    overflow-y: scroll;
}

.message-space {
    height: 100%;
    display: grid;
    grid-template-rows: auto 70px;
}
</style>