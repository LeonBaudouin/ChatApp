<template>
    <div class="smiley">
        <span 
            class="add-smiley"
            v-for="(smiley, index) in smileys" :key="index"
            @click="$emit('smiley', String.fromCodePoint(smiley))"
        >
            {{ String.fromCodePoint(smiley) }}
        </span>
    </div>
</template>

<script>

const SMILEYS = ['0x1F600', '0x1F601', '0x1F602', '0x1F603', '0x1F604', '0x1F605', '0x1F606', '0x1F607', '0x1F608', '0x1F609', '0x1F60A', '0x1F60B', '0x1F60C', '0x1F60D', '0x1F60E', '0x1F60F', '0x1F610', '0x1F611', '0x1F612', '0x1F613', '0x1F614', '0x1F615', '0x1F616', '0x1F617', '0x1F618', '0x1F619', '0x1F61A', '0x1F61B', '0x1F61C', '0x1F61D', '0x1F61E', '0x1F61F', '0x1F620', '0x1F621', '0x1F622', '0x1F623', '0x1F624', '0x1F625', '0x1F626', '0x1F627', '0x1F628', '0x1F629', '0x1F62A', '0x1F62B', '0x1F62C', '0x1F62D', '0x1F62E', '0x1F62F', '0x1F630', '0x1F631', '0x1F632', '0x1F633', '0x1F634', '0x1F635', '0x1F636', '0x1F637', '0x1F641', '0x1F642', '0x1F643', '0x1F644', '0x1F910', '0x1F911', '0x1F912', '0x1F913', '0x1F914', '0x1F915', '0x1F920', '0x1F921', '0x1F922', '0x1F923', '0x1F924', '0x1F925', '0x1F927', '0x1F928', '0x1F929', '0x1F92A', '0x1F92B', '0x1F92C', '0x1F92D', '0x1F92E', '0x1F92F', '0x1F9D0']

export default {
    computed: {
        smileys() {
            return SMILEYS
        }
    }
}
</script>

<style lang="scss">
.smiley {
    z-index: 10;
    line-height: 1.5;
    padding: 20px;
    background-color: #D9D9D9;
    border-radius: 20px;
    font-size: 1.5rem;
    position: absolute;
    bottom: 100%;
}
.add-smiley {
    cursor: pointer;
    display: inline-block;
    user-select: none;

    &:hover {
        filter: brightness(0.8);
    }
}
</style>