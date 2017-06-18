<template>
  <div class="card">
    <vue-form-generator :schema="schema" :model="model"></vue-form-generator>
  </div>
</template>

<script>
  import VueFormGenerator from 'vue-form-generator';
  import schema from './../services/schema';

  export default {
    props: ['model'],
    data() {
      const store = this.$store;

      return {
        schema: schema.paymentSelect(store),
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../scss/_globals.scss";

  .dataform__payment-select {
    .field-radios {
      > label {
        display: none;
      }
    }
    .radio-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      width: 100%;

      > label {
        position: relative;
        flex: 1 1 rem(200px);
        display: inline-block;
        width: 50%;
        min-width: rem(200px);
        margin: rem(10px);
        padding: rem(10px) rem(10px) rem(10px) rem(40px);
        border-radius: rem(5px);
        font-size: rem(20px);
        cursor: pointer;

        &.is-checked,
        &:hover {
          background-color: #f4f4f4;
        }

        > input {
          position: absolute;
          left: rem(10px);
        }

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: rem(40px);
          margin: rem(5px) 0;
          background-repeat: no-repeat;
          background-size: contain;
        }

        &:nth-child(1) {
          &::after {
            background-image: url(./../../static/paypal-logo.png);
          }
        }

        &:nth-child(2) {
          &::after {
            background-image: url(./../../static/logo-mastercard.png), url(./../../static/logo-visa.png);
            background-size: auto 100%;
            background-position: left center, rem(80px) center;
          }
        }
      }
    }
  }
</style>
