<template>
  <div class="header">
    <button type="button" v-on:click="click">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd"
              d="M14.123 12l9.437-9.438A1.5 1.5 0 1 0 21.438.44L12 9.877 2.562.44A1.5 1.5 0 1 0 .44 2.562L9.878 12 .44 21.437a1.5 1.5 0 1 0 2.122 2.122L12 14.122l9.438 9.437a1.496 1.496 0 0 0 2.122 0 1.5 1.5 0 0 0 0-2.122L14.123 12z"/>
      </svg>
    </button>
    Überschrift
  </div>
</template>

<script>
  import store from './../store';

  export default {
    methods: {
      click: (event) => {
        store.commit('toggleOverlay');
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/_globals.scss";

  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: rem(70px);
    padding: 0 rem(30px);
    background-color: #008000;
    color: white;
    font-size: rem(20px);
    line-height: rem(70px);
    vertical-align: middle;
  }

  button {
    position: absolute;
    right: rem(30px);
    top: 50%;
    transform: translateY(-50%);
    color: inherit;
    border: none;
    background: transparent;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    transition: color .3s;
    vertical-align: middle;

    &:hover {
      color: #b8ce9c;
    }
  }
</style>
