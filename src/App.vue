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
        document.documentElement.style.setProperty('--theme-color', sessionStorage.getItem('theme-color'));
    }
}
</script>

<style lang="scss">

.text-input {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    width: 100%;
    border: none;
    background: none;
    outline: none;
}

.text-input-area {
    padding: 10px;
    border-radius: 50px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
}

body {
    margin: 0;
}

* {
    box-sizing: border-box;
}

:root {
    --theme-color: #2B00FF;
}
#app {
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
    left: 5px;
    width: 8px;
    border-radius: 5px;
}

::-webkit-scrollbar-track {
    background-color: #D9D9D9;
}

::-webkit-scrollbar-thumb {
    background: var(--theme-color);
    border-radius: 5px;
}
</style>
