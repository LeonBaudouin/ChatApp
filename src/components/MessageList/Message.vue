<template>
    <div :class="{'from-me': isFromMe, 'from-other': !isFromMe }" class="message">
        {{ message.text }}
    </div>
</template>

<script>
import moment from 'moment'
import store from '../../store'

export default {
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    computed: {
        date() {
            return moment(this.message.created).format('hh:mm')
        },
        isFromMe() {
            return this.message.user.username == store.user.username
        }
    }
}
</script>

<style lang="scss">
.message {
    display: inline-block;

    &.from-me {
        padding: 10px 10px;
        text-align: right;
        color: white;
        background-color: var(--theme-color);
        border-radius: 30px 30px 0 30px;
    }
}
</style>