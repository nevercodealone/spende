<template>
  <div v-show="show" class="overlay">
    <div class="overlay__window">
      <NCA-Header :headline="headline" class="overlay__header"></NCA-Header>
      <NCA-Dataform v-if="!thankyou" class="overlay__dataform"></NCA-Dataform>
      <NCA-Thankyou v-if="thankyou" class="overlay__thankyou"></NCA-Thankyou>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Dataform from '@/components/Dataform';
  import Thankyou from '@/components/Thankyou';

  export default {
    computed: {
      show () {
        return this.$store.state.overlay
      },
      thankyou () {
        return this.$store.state.thankyou
      },
      headline () {
        if (this.$store.state.thankyou) {
          return '';
        }

        switch (this.$store.state.step) {
          default:
            return '';

          case 1:
            return '1/4 Bitte wählen Sie Ihre Zahlungsart aus';

          case 2:
            return '2/4 Zahlungsdetails eingeben';

          case 3:
            return '3/4 Spendenbetrag wählen';

          case 4:
            return '4/4 Persönliche Daten';
        }
      }
    },
    components: {
      'NCA-Header': Header,
      'NCA-Dataform': Dataform,
      'NCA-Thankyou': Thankyou,
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
    z-index: 100;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background: rgba(0, 0, 0, .2);
    animation-name: overlayFadeIn;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    -webkit-backdrop-filter: blur(4px);

    &__window {
      flex: 0 0 auto;
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      max-width: rem(600px);
      min-height: rem(500px);
      margin: auto;
      padding: rem(100px) rem(20px) rem(20px) rem(20px);
      background: white url(./../../static/bg-frosch.png) no-repeat right bottom;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      outline: 50vmax rgba(0, 0, 0, 0.2) solid;
    }

    &__header {
      flex: 0 0 auto;
    }

    &__dataform,
    &__thankyou {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }

    &__thankyou {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
