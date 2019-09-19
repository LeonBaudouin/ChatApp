<template>
    <div class="login-page">
        <h1 class="site-title">Robot <img src="robot.svg" alt="logo" class="logo"> Chat</h1>
        <form class="login-form" @submit.prevent="onSubmit">
            <div class="text-input-area login-input-area input-username-area">
                <div v-if="error" class="error" >
                    {{ error }}
                </div>
                <input
                    type="text" class="text-input input-username" id="username" placeholder="Nom d'utilisateur" required
                    v-model="typedUsername"
                >
            </div>
            <div class="avatar-area">
                <Avatar :user="{username: typedUsername, avatar: typedAvatarUrl}" class="preview-avatar"></Avatar>
                <div class="text-input-area login-input-area input-avatar-area">
                    <input
                        type="text" class="text-input input-avatar" id="avatar-url" placeholder="Url de ton avatar"
                        v-model="typedAvatarUrl"
                    >
                </div>
            </div>
            <button type="submit" class="submit-button" :disabled="waitRegister">Connexion</button>
        </form>
    </div>
</template>

<script>
import Socket from '../lib/socket'
import Avatar from '../components/UserList/Avatar'

export default {
    data: function() {
        return {
            error: '',
            waitRegister: false,
            typedUsername: null,
            typedAvatarUrl: null
        }
    },
    watch: {
        typedUsername() {
            this.error = ''
        }
    },
    methods: {
        onSubmit: function() {
            this.waitRegister = true
            
            const user = {
                username: this.typedUsername,
                avatar: this.typedAvatarUrl
            }

            Socket.userRegister(user)
                .catch((e) => this.error = e.message)
                .finally(() => {
                    this.waitRegister = false
                })
        },
    },
    components: {
        Avatar
    }
}
</script>

<style lang="scss">
.login-page {
    height: 100vh;
    background-color: var(--theme-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-form {
    width: 35vw;
    min-width: 300px;
    max-width: 450px;

    .submit-button {
        margin: auto;
        display: block;
        border: none;
        background-color: #0e0e0e;
        font-size: 1.1rem;
        color: white;
        font-family: 'Roboto', sans-serif;
        padding: 12px 50px;
        border-radius: 30px;
        cursor: pointer;
    }

    .input-username-area {
        position: relative;
        .error {
            font-size: 1.1rem;
            position: absolute;
            padding: 10px 20px;
            border-radius: 0 20px 20px 20px;
            left: calc(100% + 10px);
            background-color: red;
            white-space: nowrap;
        }
    }

    .login-input-area {
        margin-bottom: 30px;
        background-color: white;
            
        &.input-avatar-area {
            margin: 0 0 0 20px;
            flex-grow: 1;
        }
    }

    .avatar-area {
        display: flex;
        margin: 0;
        align-items: center;
        margin-bottom: 30px;
        .preview-avatar {
            width: 70px;
            height: 70px;
            background-color: white;
        }
    }

}

.site-title {
    color: white;
    margin: 0;
    font-size: 5rem;
    margin-bottom: 30px;
    
    .logo {
        height: 4rem;
    }
}
</style>