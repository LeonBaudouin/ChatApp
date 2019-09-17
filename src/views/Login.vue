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
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img
                        :src="this.typedAvatarUrl ? this.typedAvatarUrl : 'https://via.placeholder.com/200'"
                        class="card-img" alt="..."
                    >
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 v-if="this.typedUsername" class="card-title">{{ this.typedUsername }}</h5>
                        <h5 v-else class="card-title text-muted">Username</h5>
                    </div>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'Login',
    props: {
        user: {}
    },
    data: function() {
        return {
            errors: [],
            typedUsername: null,
            typedAvatarUrl: null
        }
    },
    methods: {
        onSubmit: function() {
            const errors = []
            if (this.typedUsername == null) {
                errors.push('Username cannot be empty')
            }
            this.errors = errors
            
            const user = {
                username: this.typedUsername,
                avatar: this.typedAvatarUrl
            }
            return user
        }
    },
    created: function () {
        if(this.user !== null) {
            this.$router.push({ name: "chat"})
        }
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