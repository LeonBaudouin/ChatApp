<template>
    <form class="message-box" @submit.prevent="onSubmit">
        <div class="input-group">
            <div class="input-group-prepend">
                <button class="btn btn-outline-primary">+</button>
            </div>
            <input
                type="text" class="form-control" placeholder="Message" aria-label="Message" 
                v-model="messageText" :class="{'is-invalid': this.error}"
            >
            <div class="input-group-append">
                <button class="btn btn-primary" type="submit">Envoyer</button>
            </div>
            <div v-if="this.error" class="invalid-feedback">
                Please choose a username.
            </div>
        </div>
    </form>
</template>

<script>
import Socket from '../lib/socket'

export default {
    data: function() {
        return {
            error: null,
            waitForSend: false,
            messageText: null
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
            Socket.sendMessage(this.messageText)
                .then(this.messageText = '')
                .catch((error) => this.error = error)
                .finally(() => this.waitForSend = false)
        }
    }
}
</script>

<style lang="scss">
.message-box {
    align-self: center;
}
</style>