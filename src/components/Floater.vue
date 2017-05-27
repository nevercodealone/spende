<template>
  <button class="floater" v-on:click="click">€</button>
</template>

<script>
  export default {
    data () {
      return {
        click: () => {
            this.$store.commit('toggleOverlay');
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/_globals.scss";

  .floater {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 99;
    width: rem(56px);
    height: rem(56px);
    background-color: darkolivegreen;
    color: white;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    font-size: rem(30px);
    line-height: rem(56px);
    cursor: pointer;
    outline: none;
  }
</style>
