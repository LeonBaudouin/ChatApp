<template>
    <div :class="{'border-primary' : message.user.username == myName }" class="card mb-1">
        <div class="card-body" >
            <p class="card-text">{{ message.text }}</p>
            <p class="card-text"><small class="text-muted">à {{ date }} par {{ message.user.username }}</small></p>
        </div>
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
        myName() {
            return store.$data.user.username
        }
    }
}
</script>