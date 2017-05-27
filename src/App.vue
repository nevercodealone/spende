<template>
  <div class="app">
    <Floater></Floater>
    <Overlay></Overlay>
  </div>
</template>

<script>
  import Floater from '@/components/Floater';
  import Overlay from '@/components/Overlay';

  export default {
    name: 'app',
    components: {
      'Floater': Floater,
      'Overlay': Overlay,
    }
  };
</script>

<style scoped lang="scss">
  .app {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

    *, ::before, ::after {
      box-sizing: inherit;
      font-family: inherit;
    }
  }
</style>
