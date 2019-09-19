<template>
    <div class="user-list">
        <div class="search-field">
            <div class="search-input-wrapper">
                <input type="text" class="text-input search-input" :class="{'filled': search}" v-model="search">
            </div>
            <svg version="1.1" class="search-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" xml:space="preserve">
                <path class="search-icon-path" d="M19.4,16.9l-4.1-3.7c1-1.4,1.7-3.1,1.7-4.9C17,3.7,13.2,0,8.5,0C3.8,0,0,3.7,0,8.2c0,4.5,3.8,8.2,8.5,8.2
                    c1.4,0,2.7-0.3,3.9-0.9l4.3,3.9c0.7,0.7,1.9,0.7,2.7,0C20.2,18.7,20.2,17.6,19.4,16.9z M8.4,13.8c-3.2,0-5.7-2.5-5.7-5.6
                    c0-3.1,2.6-5.6,5.7-5.6c3.2,0,5.7,2.5,5.7,5.6C14.1,11.3,11.5,13.8,8.4,13.8z"/>
            </svg>
        </div>
        <User v-for="(user, index) in users" :user="user" :key="index"></User>
    </div>
</template>

<script>
import User from './UserList/User'
import store from '../store.js'

export default {
    data() {
        return {
            search: ''
        }
    },
    components: {
        User
    },
    watch: {
        search() {
            store.userSearch = this.search
        }
    },
    computed: {
        users() {
            if (this.search) return store.users.filter(u => u.username.toUpperCase().includes(this.search.toUpperCase()))
            return store.users
        }
    }
}
</script>

<style lang="scss">
.user-list {
    padding: 30px 40px 30px 30px;
    height: 100%;
    overflow-y: auto;
    background-color: white;
    border-radius: 0 30px 30px 0;
}

.search-field {
    display: flex;
    margin-bottom: 30px;
    align-items: center;

    .search-input-wrapper {
        margin: 0 10px 0 25px;
        padding-bottom: 4px;
        border-bottom: 3px solid var(--theme-color)
    }
    .search-input {
        padding: 10px 20px;
        border-radius: 20px 20px 20px 0;
        &:focus, &.filled {
            background-color: #e9e9e9;
        }
    }
    
    .search-icon {
        height: 2.2rem;
        &-path {
            fill: var(--theme-color);
        }
    }
}
</style>