<template>
    <div class="user">
        <Avatar :user="user"></Avatar>
        <span v-if="user.username" class="user-name">{{ user.username }}</span>
    </div>
</template>

<script>
import Avatar from './Avatar'

export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    components: {
        Avatar
    }
}
</script>

<style lang="scss">
.user {
    display: flex;

    margin-bottom: 30px;
    padding: 0 15px;

    align-items: center;


    &-name {
        font-size: 1.5rem;
        margin-left: 20px;
    }
}
</style>