<template>
  <div class="app">
    <NCA-Floater></NCA-Floater>
    <NCA-Overlay></NCA-Overlay>
  </div>
</template>

<script>
  import Floater from '@/components/Floater';
  import Overlay from '@/components/Overlay';

  export default {
    name: 'app',
    components: {
      'NCA-Floater': Floater,
      'NCA-Overlay': Overlay,
    }
  };
</script>

<style lang="scss">
  @import "./scss/_globals.scss";

  .app {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

    *, ::before, ::after {
      box-sizing: inherit;
      font-family: inherit;
    }

    fieldset {
      display: block;
      width: 100%;
      min-width: 0;
      border: none;
    }

    input,
    select {
      flex: 1 1 100%;
      min-width: 0;
      border: none;
      font-size: rem(24px);

      &:not([type="radio"]):not([type="checked"]),
      option {
        padding: rem(12px);
        background-color: #f4f4f4;
        border-radius: rem(5px);
        font-size: rem(24px);
      }
    }
  }
</style>
