<template>
    <div id="app">
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Socket from './lib/socket'

export default {
    created: function() {
        Socket.Init()
        Socket.registerFromSession()
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
