<template>
    <span class="user-image" @click="onClick">
        <img
            :src="getImage"
            :alt="'Avatar de ' + user.username"
            @error="imageNotFound"
        >
    </span>
</template>

<script>
import store from '../../store'

const IMAGES = ['svg/motif1.svg','svg/motif2.svg','svg/motif3.svg']

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
        getImage() {
            if (!!this.user.avatar && this.isImageFound) {
                return this.user.avatar
            }
            if (!this.user.username) return IMAGES[0]
            return IMAGES[this.user.username.charCodeAt(0) % 3]
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
        },
        onClick() {
            store.avatarClick = this.user.username
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
        background-color: var(--theme-color);
        filter: brightness(1.2);
    }

    &:hover {
        background-color: #D9D9D9;
    }
}

</style>