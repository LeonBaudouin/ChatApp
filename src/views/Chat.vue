<template>
    <div class="chat-page">
        <div class="menu">

        </div>
        <UserList></UserList>
        <div class="message-space">
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
.chat-page {
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(300px, 25vw) minmax(300px, 25vw) auto;
}
.message-space {
    display: grid;
    grid-template-rows: auto 100px;
}
</style>