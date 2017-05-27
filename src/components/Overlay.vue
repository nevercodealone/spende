<template>
  <div v-show="show" class="overlay">
    <Dataform></Dataform>
  </div>
</template>

<script>
  import Dataform from '@/components/Dataform';

  export default {
    computed: {
      show () {
        return this.$store.state.overlay
      }
    },
    components: {
        'Dataform': Dataform,
    },
    mounted() {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 27) {
                this.$store.commit('closeOverlay');
            }
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/_globals.scss";

  @keyframes overlayFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: rem(400px);
    max-height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: rem(20px);
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    outline: 50vmax rgba(0,0,0,0.1) solid;
    animation-name: overlayFadeIn;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
</style>
