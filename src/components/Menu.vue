<template>
    <div class="menu">
        <div class="my-user">
            <Avatar :user="user"></Avatar>
            <h1 class="my-username">{{ user.username }}</h1>
        </div>
        <div class="tab tab-conf active">
            <h2 class="tab-title">
                Conversation
            </h2>
        </div>

        
        <div class="tab tab-conf">
            <h2 class="tab-title">
                Déconnection
            </h2>
        </div>
        <img src="logo.svg" alt="Logo" class="logo">
    </div>
</template>

<script>
import Avatar from './UserList/Avatar'
import store from '../store'

export default {
    computed: {
        user() {
            console.log(store.user)
            return store.user
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

    .logo {
        width: 50%;
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

    &-title {
        grid-area: 2 / 2 / 2 / 2;
        font-weight: 400;
        margin: 0;

        .active & {
            background: white;
            padding: 10px 20px;
            border-radius: 40px 0 0 40px;
        }
    }
    

    &.active {
        color: black;
    }

    &-conf {

        // &.active::before {
        //     content: "";
        //     position: absolute;
        //     display: block;
        //     height: 100%;
        //     width: 100%;
        //     padding: 20px 150px 20px 0;
        //     border-radius: 40px 0 0 40px;
        //     top: 50%;
        //     left: -20px;
        //     transform: translate3d(0, -50%, 0);
        //     background-color: white;
        //     z-index: -1;
        // }
    }
}
</style>