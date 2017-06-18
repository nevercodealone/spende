<template>
  <button class="floater" v-on:click="click">Spenden</button>
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

  @keyframes floater-float {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-4px);
    }
  }

  .floater {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 99;
    width: rem(90px);
    height: rem(90px);
    padding-bottom: rem(45px);
    background: #008000 url(./../../static/icn-frosch.png) no-repeat center bottom;
    color: white;
    border: none;
    border-radius: 50%;
    box-shadow: 1px 72px 50px 0 rgba(0, 0, 0, 0.3);
    font-size: rem(12px);
    line-height: rem(45px);
    cursor: pointer;
    outline: none;
    animation-name: floater-float;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>
