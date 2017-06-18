<template>
  <h2>Danke für Ihre Spende!</h2>
</template>

<script>
  import Header from '@/components/Header';
  import Dataform from '@/components/Dataform';

  export default {
    computed: {
      show () {
        return this.$store.state.thankyou
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/_globals.scss";

  @keyframes thankyouFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h2 {
    padding: rem(100px) rem(20px) rem(20px) rem(20px);
    background: #008800 url(./../../static/icn-frosch-big.png) no-repeat right bottom;
    background-size: auto 70%;
    color: #fff;
    text-shadow: 0 0 2px #008800, 1px 1px 1px #008800, -1px -1px 1px #008800, 0 0 4px #008800, 0 0 10px #008800;
    animation-name: overlayFadeIn;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
</style>
