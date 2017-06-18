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
        schema: schema.card(store),
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../scss/_globals.scss";

  .card {
    .input {
      &-exp_month,
      &-exp_year {
        width: calc(50% - #{rem(10px)});
      }

      &-exp_year {
        margin-left: rem(20px);
      }
    }
  }
</style>
