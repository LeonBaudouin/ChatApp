<template>
    <div id="app">
        <div>
            <router-link to='/chat'>Chat</router-link>
            <router-link to='/'>Login</router-link>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
