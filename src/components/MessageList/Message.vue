<template>
    <div class="message" :class="getClass">
        <p class="message-text">{{ message.text }}</p>
    </div>
</template>

<script>

const CLASSES = [
    {
        htmlClass: 'tech', 
        words: ['tech', 'futur', 'science', 'sci-fi']
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
        htmlClass: 'beer',
        words: ['pinte', 'bière', 'biere', 'alcool', 'party', 'mettre une mine', 'boire', 'bar', 'bistrot']
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
        }
    }
}
</script>

<style lang="scss">
.message {
    display: inline-block;
    padding: 10px 20px;
    max-width: 75%;
    margin-bottom: 5px;
    position: relative;

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
    }
}
</style>