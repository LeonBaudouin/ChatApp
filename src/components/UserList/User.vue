<template>
    <div class="user">
        <img
            :src="user.avatar ? user.avatar : 'https://via.placeholder.com/200'"
            class="user-image" alt="..."
        >
        <span v-if="user.username" class="user-name">{{ user.username }}</span>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.user {
    display: flex;

    margin-bottom: 30px;
    padding: 0 15px;

    align-items: center;

    &-image {
        height: 75px;
        width: 75px;
        border-radius: 50%;
        object-fit: cover;
    }

    &-name {
        font-weight: bold;
        font-size: 1.5rem;
        margin-left: 20px;
    }
}
</style>