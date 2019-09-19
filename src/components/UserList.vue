<template>
    <div class="user-list">
        <User v-for="(user, index) in users" :user="user" :key="index"></User>
    </div>
</template>

<script>
import User from './UserList/User'
import store from '../store.js'

export default {
    components: {
        User
    },
    computed: {
        users() {
            return store.users
        }
    }
}
</script>

<style lang="scss">
.user-list {
    padding: 30px;
    height: 100%;
    overflow-y: auto;
    background-color: white;
    border-radius: 0 30px 30px 0;
}
</style>