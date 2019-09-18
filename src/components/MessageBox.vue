<template>
    <form class="message-box" @submit.prevent="onSubmit">
        <Smiley v-if="isSmileyOpen" @smiley='addText'></Smiley>
        <div class="input-group">
            <div class="input-group-prepend">
                <button
                    class="btn" type="button"
                    :class="{'btn-outline-secondary': !isSmileyOpen, 'btn-secondary': isSmileyOpen}" @click="toggleSmiley"
                >+</button>
            </div>
            <input
                type="text" class="form-control" placeholder="Message" aria-label="Message" 
                v-model="messageText" :class="{'is-invalid': this.error}"
            >
            <div class="input-group-append">
                <button class="btn btn-primary" type="submit" :disabled="waitForSend">Envoyer</button>
            </div>
            <div v-if="this.error" class="invalid-feedback">
                Please choose a username.
            </div>
        </div>
    </form>
</template>

<script>
import Socket from '../lib/socket'
import store from '../store'
import Smiley from './MessageBox/Smiley'

export default {
    data: function() {
        return {
            error: null,
            waitForSend: false,
            messageText: '',
            isSmileyOpen: false
        }
    },
    watch: {
        messageText() {
            this.error = null
        }
    },
    methods: {
        onSubmit: function() {
            if(!this.messageText) return
            this.waitForSend = true
            store.loadingMessage = {
                user: store.user,
                created: new Date,
                text: this.messageText
            }
            Socket.sendMessage(this.messageText)
                .then(() => this.messageText = '')
                .catch((error) => this.error = error)
                .finally(() => {
                    this.waitForSend = false
                    store.loadingMessage = null
                })
        },
        toggleSmiley: function() {
            this.isSmileyOpen = !this.isSmileyOpen
        },
        addText: function(text) {
            this.messageText += text
        }
    },
    components: {
        Smiley
    }
}
</script>

<style lang="scss">
</style>