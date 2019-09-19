<template>
    <form class="message-box" @submit.prevent="onSubmit">
        <Smiley v-if="isSmileyOpen" @smiley='addText'></Smiley>
        <div class="text-input-area message-input-group">
            <button
                type="button" class="button emoticon"
                :class="{'open': isSmileyOpen}" @click="toggleSmiley"
            >
                <svg version="1.1" class="button-image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32.9 23.7" xml:space="preserve">                    
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path class="st0" d="M4.5,7.8C2.8,7.3,1,8.1,0.4,9.8c-0.3,0.8,0.9,1.1,1.2,0.3C2,9,3.2,8.7,4.2,9C5,9.2,5.3,8,4.5,7.8L4.5,7.8z"
                                        />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path class="st0" d="M1.3,12.2c0-0.3,0-0.7,0-1c0-0.8-1.3-0.8-1.3,0c0,0.3,0,0.7,0,1C0,13,1.3,13.1,1.3,12.2L1.3,12.2z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path class="st0" d="M4.9,16.9c-0.4,0.1-1.1,0.1-1.6-0.1c-1.5-0.4-2-1.9-2.1-3.3c-0.1-0.8-1.3-0.8-1.3,0
                                        c0.1,1.8,0.8,3.7,2.6,4.4c0.8,0.3,1.8,0.4,2.6,0.2C6.1,17.9,5.7,16.7,4.9,16.9L4.9,16.9z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path class="st0" d="M27.1,17.6c2.5,0.5,5.2-0.5,5.6-3.2c0.4-2.4,0.2-6.2-2.8-6.7c-0.8-0.1-1.1,1.1-0.3,1.2
                                    c2.2,0.4,2.1,3.1,2,4.8c-0.2,2.2-2.1,3.1-4.1,2.7C26.7,16.2,26.3,17.4,27.1,17.6L27.1,17.6z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path class="st0" d="M27.9,11.9C27.1,26,4.4,26.2,4.4,11.9C4.4-2.4,27.1-2.3,27.9,11.9c0,0.8,1.3,0.8,1.3,0
                                    c-0.9-15.7-26.1-15.9-26,0c0.1,15.9,25.1,15.7,26,0C29.2,11.1,28,11.1,27.9,11.9z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path class="st0" d="M22.1,7.5c1.1,0.2,2.6,2.7,2.6,3.7c0,0.3-0.2,0.6-0.2,0.9c-0.2,0.8-0.4,1.7-0.7,2.4
                                    c-0.6,1.5-1.7,2.2-3.3,2.4c-2.9,0.3-9.3,0.8-10.7-2.1c-0.3-0.7-1.4-0.1-1.1,0.6c1.3,2.7,3.6,2.7,6.3,2.7c2.3,0,6,0.7,8.1-0.4
                                    c1.8-0.9,2-3.4,2.4-5.1c0.8-2.9,0.3-5.9-3.1-6.4C21.6,6.2,21.3,7.4,22.1,7.5L22.1,7.5z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path class="st0" d="M8.9,11.1c0-0.2-0.1-0.3-0.1-0.5c-0.1-1,1.4-2.8,2.3-3.1c0.1,0,0.3,0,0.5,0c1-0.2,2.1,0,3.1,0
                                    c1.8,0,3.6,0,5.5,0c0.8,0,0.8-1.3,0-1.3c-2.7,0-5.5,0-8.2,0c-3.2,0.1-4.9,1.9-4.2,5.2C7.9,12.2,9.1,11.9,8.9,11.1L8.9,11.1z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path class="st0" d="M18.8,12.4c0-0.8,1.4-0.8,1.4,0c0,0.8,1.3,0.8,1.3,0c-0.1-2.4-3.8-2.4-3.9,0C17.5,13.2,18.8,13.2,18.8,12.4
                                    L18.8,12.4z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path class="st0" d="M12.9,12.4c0-0.8,1.4-0.8,1.4,0c0,0.8,1.3,0.8,1.3,0c-0.1-2.4-3.8-2.4-3.9,0C11.6,13.2,12.9,13.2,12.9,12.4
                                    L12.9,12.4z"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
            <input
                type="text" class="text-input message-input" placeholder="Message" aria-label="Message" 
                v-model="messageText" :class="{'is-invalid': this.error}" ref="input"
            >
            <button type="submit" class="submit button" :disabled="waitForSend">
                <svg class="button-image" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25.3 30.2" xml:space="preserve">>                    
                    <path class="arrow-path" d="M5,12.7L0.4,5.2C-1,2.2,1.6-1,4.2,0.3l19.2,9.9c2.2,1.1,2.4,4.7,0.4,6.2L6.1,29.6C3.9,31.3,1,29,1.5,25.9
                        l3.8-10.8C5.4,14.3,5.3,13.4,5,12.7z"/>
                </svg>
            </button>
            <div v-if="this.error" class="message-error">
                {{ this.error.message }}
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
            if (this.messageText) Socket.sendTyping();
        }
    },
    methods: {
        onSubmit: function() {
            if(!this.messageText) return
            this.waitForSend = true
            this.isSmileyOpen = false
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
            this.$refs.input.select()
            this.messageText += text
        }
    },
    components: {
        Smiley
    }
}
</script>

<style lang="scss">
.message-box {
    position: relative;
    display: flex;
    margin: 0 30px;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
}

.message-error {
    position: absolute;
    top: -4px;
    padding-left: 55px;
    color: #e92d2d;
}

.message-input-group {

    .button {
        line-height: 0;
        background: none;
        padding: 0;
        margin: 0;
        border: 0;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        &:hover {
            filter: brightness(0.8);
        }

        &.emoticon {
            margin-left: 2px;
            padding: 3px;
            background-color: var(--theme-color);
            border-radius: 50%;

            .button-image {
                fill: white;
                width: 32px;
                height: 32px;
            }

            &.open {
                background-color: white;
                .button-image {
                    fill: var(--theme-color);
                }
            }
        }

        &.submit {
            margin-right: 10px;
            width: 25px;
            height: 25px;
        }

        & .arrow-path {
            fill: var(--theme-color);
        }
    }

    .message-input {
        margin: 0 16px;
    }

}
</style>