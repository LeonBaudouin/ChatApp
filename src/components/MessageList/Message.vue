<template>
    <div class="message" :class="getClass">
        <p class="message-text" v-html="getMessage"></p>
    </div>
</template>

<script>
import store from '../../store';

const CLASSES = [
    {
        htmlClass: 'tech', 
        words: ['tech', 'futur', 'science', 'sci-fi']
    },
    {
        htmlClass: 'beer',
        words: ['pinte', 'bière', 'biere', 'beer', 'alcool', 'party', 'mettre une mine', 'boire', 'bar', 'bistrot']
    },
    {
        htmlClass: 'color', 
        words: ['color', 'colour', 'couleur', 'gradient', 'dégradé']
    },
    {
        htmlClass: 'error', 
        words: ['erreur', 'error', 'attention', '404', 'danger', 'caution', 'chantier']
    },
    {
        htmlClass: 'bee', 
        words: ['bee', 'printemp', 'spring', 'fleur', 'flower', 'polen']
    },
    {
        htmlClass: 'emoji', 
        words: ['lol', 'mdr', 'emoji', 'emoticon', 'smile', 'happy'],
    },
    {
        htmlClass: 'game',
        words: ['game', 'jeu', 'play', 'jouer']
    },
    {
        htmlClass: 'love',
        words: ['love', 'amour', 'aime']
    },
    {
        htmlClass: 'sky',
        words: ['sky', 'night', 'star', 'etoile', 'étoile', 'ciel', 'nuit']
    },
    {
        htmlClass: 'cloud',
        words: ['nuage', 'pluie', 'pleut', 'orage']
    },
    {
        htmlClass: 'vintage',
        words: ['retro', 'vintage', '70\'', '80\'', 'kitch']
    }
]


export default {
    props: {
        isLoading: Boolean,
        message: {
            type: Object,
            required: true
        }
    },
    computed: {
        getClass() {
            let result = '';
            for (const {words, htmlClass} of CLASSES) {
                for (const w of words) {
                    if (this.message.text.toUpperCase().includes(w.toUpperCase())) {
                        result = htmlClass;
                        break
                    }
                }
                if (result) break
            }
            return result
        },
        getMessage() {
            return this.message.text.split(' ').map(w => w == store.user.username ? `<span class="name">${w}</span>` : w).join(' ')
        }
    }
}
</script>

<style lang="scss">

div.message {

    &.sky {
        .message-text {
            color: white;
        }
        background-image: url('../../../public/svg/sky.svg');
        background-size: 344px 106px;
        background-position: center;
    }

    &.vintage {
        .message-text {
            color: black;
        }
        margin-top: 10px;
        background-color: #fcfcfc;
        background-image: url('../../../public/svg/kitch-bg.svg');
        background-size: 7.4px 7.4px;
        border: 3px solid #7f8281;
        filter: drop-shadow(-4px -4px 0 #02e7bf);

    }

    &.beer {
        margin-top: 5px;
        background-color: #fabc41;
        border: 3px solid #f5a100;
        background-image: url('../../../public/svg/beer-bg.svg');
        background-size: 50px 50px;
        background-position: bottom;
        background-repeat: repeat-x;
        .message-text {
            color: white;
        }

        &::before {
            position: absolute;
            width: calc(100% + 10px);
            bottom: 100%;
            transform: translateY(60%);

            .from-me & {
                content: url('../../../public/svg/beer-top.svg');
                right: -3px;
            }

            .from-other & {
                content: url('../../../public/svg/beer-top-other.svg');
                left: -3px;
            }
        }
    }

    &.love {
        background-color: #ff646f;
        border: 8px solid #ff1718;
        background-image: url('../../../public/svg/heart.svg');
        background-size: 160.1px 56.1px;
        background-position: center;
        .message-text {
            color: white;
        }
    }

    &.game {
        background-image: url('../../../public/svg/play.svg');
        background-size: 340.3px 89.7px;
        background-position: center;
        .message-text {
            color: white;
        }
    }

    &.emoji {
        background-image: url('../../../public/svg/emojis.svg');
        background-size: 556px 150px;
        background-position: center;
        .message-text {
            color: white;
        }
    }

    &.bee {
        background-color: #807600;
        background-image: url('../../../public/svg/bee.svg');
        overflow: hidden;
        z-index: 1;
        .message-text {
            color: white;
        }
        

        &::before {
            content: '';
            z-index: -1;
            display: block;
            position: absolute;
            background-color: black;
            top: 0;
            height: 100%;
            width: 10%;

            .from-me & {
                left: 0;
            }

            .from-other & {
                right: 0;
            }
        }
    }

    &.error {
        background-color: white;
        background-image: url('../../../public/svg/error.svg');
        overflow: hidden;
        z-index: 1;
        padding-top: 20px;
        padding-bottom: 20px;
        .message-text {
            color: white;
        }

        &::before {
            content: '';
            z-index: -1;
            display: block;
            position: absolute;
            transform: translate3d(-50%, -50%, 0);
            background-color: #272724;
            top: 49%;
            left: 50%;
            height: calc(100% - 36px);
            width: 100%;
        }
    }

    &.tech {
        
        background-color: #063D55;
        border-bottom: #3EB6A3 4px solid;
        
        .message-text {
            color: white;
        }

        &::before {
            content: url('../../../public/svg/tech-icon.svg');
            position: absolute;
            width: 30px;
            height: 30px;
            bottom: -3px;

            .from-me & {
                right: -10px;
            }

            .from-other & {
                left: -10px;
            }
        }

        &::after {
            content: url('../../../public/svg/tech-border.svg');
            height: 37px;
            width: 50px;
            position: absolute;
            bottom: 1px;

            .from-me & {
                left: 0;
            }
            .from-other & {
                content: url('../../../public/svg/tech-border-other.svg');
                right: 0;
            }

        }
    }

    &.color {
        background: linear-gradient(0.25turn, #5DFCEE, #8924A6);
        .message-text {
            color: black;
        }
    }
}


.message {
    display: inline-block;
    position: relative;
    padding: 10px 20px;
    max-width: 75%;
    margin-bottom: 5px;

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

        & .name {
            color: var(--theme-color)
        }
    }
}
</style>