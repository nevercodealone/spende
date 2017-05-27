<template>
  <div class="card">
    <h1>Kreditkartendaten</h1>
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
<style scoped lang="scss">
  @import "../scss/_globals.scss";
</style>
