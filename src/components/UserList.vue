<template>
    <div>
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
            return store.$data.users
        }
    }
}
</script>