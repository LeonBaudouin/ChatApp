<template>
    <div id="app">
        <router-view></router-view>
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


body {
    margin: 0;
}

* {
    box-sizing: border-box;
}

#app {
    --theme-color: #2B00FF;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
