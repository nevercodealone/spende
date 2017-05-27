<template>
  <form action="http://localhost/froschkoenige/pay.php" method="POST" class="dataform" v-on:submit="next">
    <Slider :model="model.amount" class="dataform__slider"></Slider>
    <Owner :model="model"></Owner>
    <Card v-if="model.type === 'card'" :model="model"></Card>
    <input type="hidden" name="source" :value="model.source">
    <input type="hidden" name="amount" :value="amount">
    <button type="submit" class="dataform__submit">Weiter</button>
  </form>
</template>

<script>
  import Slider from '@/components/Slider';
  import Owner from '@/components/Owner';
  import Card from '@/components/Card';
  import store from './../store';
  import stripe from './../services/stripe';

  export default {
    components: {
      'Slider': Slider,
      'Owner': Owner,
      'Card': Card,
    },
    data() {
      return {
        model: (() => store.state.model)(),
      }
    },
    methods: {
      next: function (event) {
        event.preventDefault();

        stripe.process((status, response) => {
          if (status !== 200) {
            alert('Fehler!');
            return;
          }

          store.commit('updateModel', {
            source: response.id
          });

          setTimeout(() => {
            const XHR = new XMLHttpRequest();
            const payload = new FormData(this.$el);

            XHR.addEventListener('load', function() {
              alert('Vielen Dank für Ihre Zahlung!');
            });
            XHR.addEventListener('error', function() {
              alert('Fehler!');
            });
            XHR.open('POST', 'http://localhost/froschkoenige/pay.php');
            XHR.send(payload);
          });
        });
      }
    },
    computed: {
      source() {
        return store.state.model.source;
      },
      amount() {
        return store.state.model.amount * 100;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../scss/_globals.scss";

  .dataform {
    .vue-form-generator {
      padding: 0;
      border: none;
    }

    .form-group {
      display: flex;
      flex-direction: row;
      margin-bottom: rem(5px);

      > label {
        flex: 1 0 25%;
        text-align: left;
      }

      > .field-wrap {
        display: flex;
        flex: 1 1 75%;

        > .wrapper {
          display: flex;
          flex: 1 1 100%;

          > input {
            flex: 1 1 100%;
          }
        }
      }
    }
  }
</style>
