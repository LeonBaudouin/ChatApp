<template>
    <div class="message" >
        <p class="message-text">{{ message.text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: Boolean,
        message: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.message {
    display: inline-block;
    padding: 10px 20px;
    max-width: 75%;
    margin-bottom: 5px;
    position: relative;

    &-text {
        overflow-wrap: break-word;
        margin: 0;
    }

    .from-me & {

        align-self: flex-end;
        background-color: var(--theme-color);
        border-radius: 50px 50px 0 50px;
        text-align: right;

        .message-text {
            color: white;
        }
    }

    .from-other & {
        
        align-self: flex-start;
        background-color: #D9D9D9;
        border-radius: 50px 50px 50px 0;
    }
}
</style>