<template>
    <div class="menu">
        <div class="my-user">
            <Avatar :user="user"></Avatar>
            <h1 class="my-username">{{ user.username }}</h1>
        </div>
        <div class="tab tab-conf active">
            <div class="tab-upspace"></div>
            <div class="tab-downspace"></div>
            <div class="tab-middlespace"></div>
            <h2 class="tab-title">
                Conversation
            </h2>
        </div>

        
        <div class="tab tab-conf">
            <h2 class="tab-title">
                <a href="#" class="tab-link" @click.prevent="logout">Déconnexion</a>
            </h2>
        </div>
        <img src="logo.svg" alt="Logo" class="logo">
    </div>
</template>

<script>
import Avatar from './UserList/Avatar'
import store from '../store'
import socket from '../lib/socket'

export default {
    computed: {
        user() {
            return store.user
        }
    },
    methods: {
        logout() {
            socket.logout()
        }
    },
    components: {
        Avatar
    }
}
</script>

<style lang="scss">
.menu {
    padding: 50px 0 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: -15px 0 0 rgba(0, 0, 0, 0.3) inset;

    .logo {
        width: 40%;
    }
}

.my-user {
    display: inline-block;
    color: white;
    .user-image {
        width: 100px;
        height: 100px;
    }

    &name {
        font-weight: 400;
        margin: 0 0 5px 20px;
        display: inline-block;
    }
}

.tab {
    z-index: 1;
    position: relative;
    color: white;
    align-self: stretch;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
    
    &-link {
        color: white;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    
    
    &.active {
        color: black;
    
        .tab-link {
            color: black;
        }
    }

    &-upspace {
        grid-area: 1 / 3 / 1 / 3;

        &::before {
            border-radius: 0 0 40px 0;
        }

        &::after {
            border-radius: 0 0 40px 0;
            transform: translate3d(-15px, 0, 0);
        }
    }

    &-downspace{
        grid-area: 3 / 3 / 3 / 3;

        &::before {
            border-radius: 0 40px 0 0;
            padding-left: 15px;
            margin-left: -15px;
            left: 0;
        }

        &::after {
            border-radius: 0 40px 0 0;
            transform: translate3d(-15px, 10px, 0);
        }
    }

    &-downspace, &-upspace {
        position: relative;
        height: 50px;
        background-color: white;

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background-color: var(--theme-color);
            position: relative;
            filter:brightness(0.7);
        }

        &::after {
            content: '';
            top: 0;
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            background-color: var(--theme-color);
        }
    }

    &-middlespace {
        grid-area: 2 / 3 / 2 / 3;
        background-color: white;
    }

    &-title {
        grid-area: 2 / 2 / 2 / 2;
        font-weight: 400;
        margin: 0;
        padding: 30px 40px;

        .active & {
            background: white;
            border-radius: 50px 0 0 50px;
            filter: drop-shadow(-15px 10px 0 rgba(0, 0, 0, 0.3));
        }
    }
}
</style>