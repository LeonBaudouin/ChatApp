<template>
    <div>
        slt
    </div>
</template>

<script>
export default {
    props: {
        user: {}
    },
    created: function () {
        if(this.user === null) {
            this.$router.push({ name: "login"})
        }
    }
}
</script>