<template>
  <div class="dataform">
    <form action="http://localhost/froschkoenige/pay.php" method="POST" v-on:submit="submit" class="dataform__form">
      <div v-show="step === 1">
        <NCA-Payment-Select :model="model" class="dataform__payment-select"></NCA-Payment-Select>
      </div>
      <div v-show="step === 2">
        <NCA-Card v-if="type === 'card'" :model="model"></NCA-Card>
      </div>
      <div v-show="step === 3">
        <NCA-Slider :model="model.amount" class="dataform__slider"></NCA-Slider>
      </div>
      <div v-show="step === 4">
        <NCA-Owner :model="model"></NCA-Owner>
      </div>
      <input type="hidden" name="source" :value="model.source">
      <input type="hidden" name="amount" :value="amount">
      <div class="dataform__buttons">
        <button v-if="step < 4" v-on:click="nextStep" type="button" class="dataform__next">Weiter</button>
        <button v-if="step === 4" type="submit" class="dataform__next">{{ (amount / 100) }} &euro; Spenden</button>
        <button v-if="step > 1" v-on:click="previousStep" type="button" class="dataform__previous">&#8592; Zurück
        </button>
      </div>
    </form>
    <form class="dataform__paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="475FKSA8N6UVC">
      <img alt="" border="0" src="https://www.paypal.com/de_DE/i/scr/pixel.gif" width="1" height="1"/>
    </form>
  </div>
</template>

<script>
  import PaymentSelect from '@/components/PaymentSelect';
  import Slider from '@/components/Slider';
  import Owner from '@/components/Owner';
  import Card from '@/components/Card';
  import store from './../store';
  import stripe from './../services/stripe';

  export default {
    components: {
      'NCA-Payment-Select': PaymentSelect,
      'NCA-Slider': Slider,
      'NCA-Owner': Owner,
      'NCA-Card': Card,
    },
    data() {
      return {
        model: (() => store.state.model)(),
      }
    },
    methods: {
      nextStep: function (event) {
        event.preventDefault();

        switch (this.type) {
          default:
            this.$store.commit('nextStep');
            break;

          case 'paypal':
            const result = window.confirm('Wir leiten Sie jetzt zu Paypal weiter.');

            if (result) {
              this.$el.querySelector('.dataform__paypal').submit();
              this.$store.commit('toggleOverlay');
              this.$store.commit('resetStep');
            }
        }
      },
      previousStep: function (event) {
        event.preventDefault();

        this.$store.commit('previousStep');
      },
      submit: function (event) {
        event.preventDefault();

        stripe.process((status, response) => {
          if (status !== 200) {
            alert('Fehler!');
            return;
          }

          console.log(JSON.stringify(response, null, 4));

          store.commit('updateModel', {
            source: response.id
          });

          setTimeout(() => {
            const XHR = new XMLHttpRequest();
            const payload = new FormData(this.$el.querySelector('.dataform__form'));

            console.log(payload);

            XHR.addEventListener('load', function () {
              store.commit('showThankyou');
            });
            XHR.addEventListener('error', function () {
              alert('Oh, so ein Mist. Es ist ein Fehler aufgetreten! :(');
            });
            XHR.open('POST', 'https://froschkoenige-spenden-widget.herokuapp.com/pay.php');
            XHR.send(payload);
          });
        });
      }
    },
    computed: {
      source() {
        return store.state.model.source;
      },
      type() {
        return store.state.model.type;
      },
      amount() {
        return store.state.model.amount * 100;
      },
      step() {
        return store.state.step;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../scss/_globals.scss";

  .dataform {
    &__form {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;

      > * {
        flex: 1 1 auto;
      }
    }

    &__buttons {
      flex: 0 0 auto;
    }

    .vue-form-generator {
      padding: 0;
      border: none;
      font-size: 0;
    }

    .form-group {
      display: inline-block;
      width: 100%;
      margin-bottom: rem(5px);

      > label {
        display: block;
        flex: 1 0 25%;
        margin-bottom: rem(5px);
        color: #666666;
        font-size: rem(14px);
        line-height: rem(24px);
        text-align: left;
      }

      &.required > label {
        &::after {
          content: '*';
          display: inline;
          vertical-align: super;
        }
      }

      > .field-wrap {
        display: flex;
        flex: 1 1 75%;
        width: 100%;
        min-width: 0;
        margin-bottom: rem(20px);

        > .wrapper {
          display: flex;
          min-width: 0;
          flex: 1 1 100%;
        }
      }
    }

    &__next {
      @include button-primary;
    }

    &__previous {
      @include button-secondary;

      &:first-letter {
        margin-right: rem(10px);
        color: #008800;
        font-size: 150%;
        font-weight: bold;
      }
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: rgba(0, 0, 0, .2);
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: rgba(0, 0, 0, .2);
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: rgba(0, 0, 0, .2);
    }
    :-moz-placeholder { /* Firefox 18- */
      color: rgba(0, 0, 0, .2);
    }

    &__paypal {
      display: none;
    }
  }
</style>
