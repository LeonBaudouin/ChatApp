<template>
    <div id="app">
        <div class="container-fluid">
            <router-view :user='user'></router-view>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'

export default {
    name: 'App',
    components: {
    },
    created: function() {
        this.socket = io('http://localhost:3000')
    },
    data: function() {
        return {
            socket: null,
            user: null
        }
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
