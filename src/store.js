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
        users: [],
        userSearch: '',
        avatarClick: null,
        avatarClickCb: null
    },
    watch: {
        isRegistered() {
            if(this.isRegistered) {
                router.push({name: 'chat'})
            } else {
                router.push({name: 'login'})
            }
        },
        avatarClick() {
            if (this.avatarClick && this.avatarClickCb) {
                this.avatarClickCb(this.avatarClick)
                this.avatarClick = null
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