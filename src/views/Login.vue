<template>
    <form class="login-form" @submit.prevent="onSubmit">
        <h2>Login</h2>
        <div
            class="alert alert-danger" role="alert"
            v-for="error in errors" :key="error"
        >
            {{ error }}
        </div>
        <div class="form-group">
            <label for="username">Username</label>
            <input
                type="text" class="form-control" id="username" placeholder="Enter username" required
                v-model="typedUsername"
            >
        </div>
        <div class="form-group">
            <label for="avatar-url">Avatar</label>
            <input
                type="text" class="form-control" id="avatar-url" placeholder="Url de l'avatar"
                v-model="typedAvatarUrl"
            >
        </div>
        <User :user='{username: typedUsername, avatar: typedAvatarUrl}' ></User>
        <button type="submit" class="btn btn-primary" :disabled="waitRegister">Submit</button>
    </form>
</template>

<script>
import Socket from '../lib/socket'
import User from '../components/UserList/User'

export default {
    data: function() {
        return {
            errors: [],
            waitRegister: false,
            typedUsername: null,
            typedAvatarUrl: null
        }
    },
    methods: {
        onSubmit: function() {
            this.waitRegister = true
            const errors = []
            
            const user = {
                username: this.typedUsername,
                avatar: this.typedAvatarUrl
            }

            Socket.userRegister(user)
                .catch((e) => errors.push(e.message))
                .finally(() => {
                    this.errors = errors
                    this.waitRegister = false
                })
        },
    },
    components: {
        User
    }
}
</script>

<style lang="scss">
.login-form {
    margin: 50px auto 0 auto;
    padding: 20px;

    width: 40vw;
    min-width: 300px;
    max-width: 500px;
    
    border-radius: 5px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
</style>