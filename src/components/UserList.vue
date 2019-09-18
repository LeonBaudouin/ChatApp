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
    border-right: 1px solid var(--theme-color);
    height: 100%;
    overflow-y: auto;
}
</style>