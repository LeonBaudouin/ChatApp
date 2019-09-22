<template>
    <div class="change-color">
        <div class="color-button" @click="togglePalette">
            <svg class="color-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.98 45.52"><defs></defs><path class="color-path" d="M22.85,0A22.76,22.76,0,1,0,45.61,22.76,22.76,22.76,0,0,0,22.85,0Zm0,39.79a17,17,0,1,1,17-17A17,17,0,0,1,22.85,39.79Z"/><rect class="color-path" x="33.39" y="-4.76" width="4.5" height="34.34" rx="1.82" transform="translate(22.63 -23.01) rotate(50.63)"/><path class="color-path" d="M21.39,25.59A3.5,3.5,0,0,0,17,24a3.89,3.89,0,0,0-2.36,2.27c-.4,1.31-2.63,2.44-4.8,1.19,0,0-.63-.39-.85-.12s.1.7.1.7,3,3.76,6.48,3.38A9.84,9.84,0,0,0,20.3,30,3.36,3.36,0,0,0,21.39,25.59Z"/></svg>
        </div>
        <div v-if="showPalette" class="color-palette">
            <div class="color" :class="{'active': color == currentThemeColor}" @click="onColorClick" v-for="(color, index) in colors" :key="index" :style="{backgroundColor : color}" :data-color="color"></div>
        </div>
    </div>
</template>

<script>
const COLORS = [
    '#3a33ff',
    '#e71d36',
    '#8b8bd6',
    '#05c8af',
    '#ef6461',
    '#700353',
    '#12c627',
    '#ff9f1c',
    '#9b3502'
]


export default {
    data() {
        return {
            showPalette: false,
            currentThemeColor: document.documentElement.style.getPropertyValue('--theme-color') ? document.documentElement.style.getPropertyValue('--theme-color') : document.documentElement.style.getPropertyValue('--theme-color')
        }
    },
    computed: {
        colors() {
            return COLORS
        }
    },
    watch: {
        currentThemeColor() {
            document.documentElement.style.setProperty('--theme-color', this.currentThemeColor);
            sessionStorage.setItem('theme-color', this.currentThemeColor)
        }
    },
    methods: {
        togglePalette() {
            this.showPalette = !this.showPalette
        },
        onColorClick({target: {attributes}}) {
            this.currentThemeColor = attributes[0].value
        }
    }
}
</script>

<style lang="scss">

.color-svg {
    position: relative;
    top: 1px;
    left: 1px;
}
.change-color {
    z-index: 10;
    position: absolute;
    right: 20px;
    top: 10px;
}

.color-palette {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-top: 10px;
    background-color: #D9D9D9;
    padding: 10px;
    border-radius: 20px;
    position: relative;
}

.color-path {
    fill: var(--theme-color);
}
.color, .color-button {
    border-radius: 50%;
}

.color-button {
    display: block;
    margin-left: auto;
    width: 50px;
    height: 50px;
}

.color {
    padding: 12px;
    background-color: white;
    border: 3px solid transparent;
    
    &:hover, &.active {
        border: 3px solid white;
    }
}
</style>