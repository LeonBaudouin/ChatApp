import Vue from 'vue'
import router from './router'

const store = new Vue({
    data: {
        user: {
            name: null,
            avatar: null
        },
        isRegistered: false,
        messages: [],
        loadingMessage: null,
        userTyping: {
            typing: false,
            user: null
        },
        users: []
    },
    watch: {
        isRegistered() {
            if(this.isRegistered) {
                router.push({name: 'chat'})
            } else {
                router.push({name: 'login'})
            }
        }
    },
    methods: {
        registerUser(user) {
            this.user = user
            this.isRegistered = true
        }
    }
})

export default store