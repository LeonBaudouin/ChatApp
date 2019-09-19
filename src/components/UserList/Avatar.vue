<template>
    <span class="user-image">
        <img
            v-if="user.avatar"
            :src="user.avatar"
            :alt="'Avatar de ' + user.username"
        >
    </span>
</template>

<script>
export default {
    props: {
        user: Object
    }
}
</script>

<style lang="scss">
.user-image {
    display: inline-block;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--theme-color);

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .menu & {
        background-color: white;
    }
}

</style>