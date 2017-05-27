<template>
  <div class="slider">
    <div class="slider__amount">EUR <input :value="model" class="slider__input"></div>
    <div class="slider__slider"></div>
  </div>
</template>

<script>
  const noUiSlider = require('nouislider');
  import 'nouislider/distribute/nouislider.css';

  export default {
    props: ['model'],
    mounted() {
      const slider = this.$el.querySelector('.slider__slider');
      const input = this.$el.querySelector('.slider__input');

      noUiSlider.create(slider, {
        start: this.model,
        connect: [true, false],
        range: {
          min: 1,
          max: 100
        },
        step: 1,
      });

      slider.noUiSlider.on('slide', (values) => {
        this.$store.commit('updateModel', {
          amount: values[0]
        });
      });

      input.addEventListener('input', (event) => {
        slider.noUiSlider.set(event.target.value);
        this.$store.commit('updateModel', {
          amount: event.target.value
        });
      });
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/_globals.scss";

  .slider {
    margin-bottom: rem(20px);

    &__amount {
      display: flex;
      justify-content: center;
      margin-bottom: rem(5px);
    }

    &__input {
      width: 6ch;
      margin-left: rem(5px);
      border: none;
      font-size: inherit;
    }
  }
</style>
