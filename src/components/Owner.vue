<template>
  <div class="owner">
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
        schema: schema.owner(store),
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../scss/_globals.scss";

  .owner {
    .input {
      &-firstname,
      &-lastname {
        width: calc(50% - #{rem(10px)});
      }

      &-zip {
        width: calc(25% - #{rem(10px)});
      }

      &-city {
        width: calc(75% - #{rem(10px)});
      }

      &-lastname,
      &-city {
        margin-left: rem(20px);
      }
    }
  }
</style>
