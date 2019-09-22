<template>
    <div class="chat-page">
        <Menu></Menu>
        <UserList/>
        <div class="message-space">
            <ChangeColor/>
            <MessageList/>
            <MessageBox/>
        </div>
    </div>
</template>

<script>
import UserList from '../components/UserList'
import MessageBox from '../components/MessageBox'
import MessageList from '../components/MessageList'
import ChangeColor from '../components/ChangeColor'
import Menu from '../components/Menu'

export default {
    components: {
        UserList,
        MessageBox,
        MessageList,
        Menu,
        ChangeColor
    }
}
</script>

<style lang="scss">
.chat-page {
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(300px, 25vw) minmax(300px, 25vw) auto;
    background-color: var(--theme-color);
}
.message-space {
    margin-left: 40px;
    background-color: white;
    display: grid;
    grid-template-rows: auto 100px;
    height: 100vh;
    border-radius: 30px 0 0 30px;
    filter: drop-shadow(-15px 10px 0 rgba(0, 0, 0, 0.3))
}
</style>