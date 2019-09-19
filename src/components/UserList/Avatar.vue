<template>
    <span class="user-image">
        <img
            :src="showImage ? user.avatar : 'motif1.svg'"
            :alt="'Avatar de ' + user.username"
            @error="imageNotFound"
        >
    </span>
</template>

<script>
export default {
    props: {
        user: Object
    },
    data() {
        return {
            isImageFound: true
        }
    },
    computed: {
        showImage() {
            return !!this.user.avatar && this.isImageFound
        }
    },
    watch: {
        user: {
            handler() {
                this.isImageFound = true
            },
            deep: true
        }
    },
    methods: {
        imageNotFound() {
            this.isImageFound = false
        }
    }
}
</script>

<style lang="scss">
.user-image {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    background-color: white;

    img {
        width: 85%;
        height: 85%;
        border-radius: 50%;
    }

    &:hover {
        background-color: #D9D9D9;
    }
}

</style>