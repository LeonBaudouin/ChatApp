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

@font-face{ 
	font-family: 'HelveticaNeue';
	src: url('assets/fonts/helveticaneue_medium-webfont.woff2');
	src: url('assets/fonts/helveticaneue_medium-webfont.woff') format('woff'),
	url('assets/fonts/helveticaneue_medium-webfont.ttf') format('truetype');
    font-weight: normal;
}

@font-face{ 
	font-family: 'HelveticaNeue';
	src: url('assets/fonts/helveticaneue_bold-webfont.woff2');
	src: url('assets/fonts/helveticaneue_bold-webfont.woff') format('woff'),
	url('assets/fonts/helveticaneue_bold-webfont.ttf') format('truetype');
    font-weight: bold;
}

@font-face{ 
	font-family: 'HelveticaNeue';
	src: url('assets/fonts/helveticaneue_light-webfont.woff2');
	src: url('assets/fonts/helveticaneue_light-webfont.woff') format('woff');
    font-weight: 300;
}

body {
    margin: 0;
}

* {
    box-sizing: border-box;
}

#app {
    --theme-color: #2B00FF;
    font-family: 'HelveticaNeue';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
