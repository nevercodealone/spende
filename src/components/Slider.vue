<template>
  <div class="slider">
    <p class="slider__text">Ziehen Sie den Regler nach links oder rechts oder klicken Sie auf den angezeigten Betrag, um dann Ihren Wunschbetrag einzutippen:</p>
    <div class="slider__amount"><input :value="model" class="slider__input"> &euro;</div>
    <div class="slider__slider"></div>
    <h2 class="slider__headline">Eine Spende in dieser Höhe finanziert:</h2>
    <p class="slider__text"><i>{{text}}</i></p>
    <p class="slider__text">Jeder Betrag ist herzlich willkommen. <strong>Bei uns zählt jeder Cent!</strong></p>
  </div>
</template>

<script>
  const noUiSlider = require('nouislider');
  import 'nouislider/distribute/nouislider.css';
  import store from './../store';
  export default {
    props: ['model'],
    mounted() {
      const slider = this.$el.querySelector('.slider__slider');
      const input = this.$el.querySelector('.slider__input');

      noUiSlider.create(slider, {
        start: this.model,
        connect: [true, false],
        range: {
          'min': [  1 ],
          '50%': [  100 ],
          '80%': [  500 ],
          'max': [ 1000 ]
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
    },
    computed: {
      text(){
        const texts = [
          {
            from: 0,
            text: 'Eine kleine Aufmerksamkeit für eines oder mehrere Kinder',
          },
          {
            from: 20,
            text: 'Monatsbeitrag für ein Kind in einem Sportverein',
          },
          {
            from: 30,
            text: 'Essensgeld für einen Monat für ein Kind in einer Kita',
          },
          {
            from: 50,
            text: 'Einen Monat lang Nachhilfe für ein Kind',
          },
          {
            from: 65,
            text: 'Den einmaligen Jahreszuschuss für Schulbücher',
          },
          {
            from: 70,
            text: 'Essensgeld für einen Monat für ein Kind in einer Schule',
          },
          {
            from: 85,
            text: 'Schulausstattung wie Schulranzen, Schulstarterset oder Federmäppchen',
          },
          {
            from: 100,
            text: 'Arbeitshefte, Turnbeutel, Hallenschuhe, Sportbekleidung für ein Jahr',
          },
          {
            from: 120,
            text: 'Einen Monat lang eine personenbezogene Therapie (Lernhilfe, Logopädie, therapeutisches Reiten, etc.)',
          },
          {
            from: 250,
            text: 'Den Eigenanteil zu Klassenfahrten, Ausflügen, Ferienfreizeiten, etc.',
          },
        ];
        let text;
        while (text = texts.pop()) {
          if (text.from < store.state.model.amount) {
            return text.text;
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../scss/_globals.scss";

  .slider {
    margin-bottom: rem(50px);
    color: #666;
    font-size: rem(16px);
    text-align: right;

    &__amount {
      margin-left: auto;
      margin-right: 0;
      margin-bottom: rem(5px);
      color: #008800;
      font-size: rem(27px);
    }

    &__input {
      &#{&}#{&}#{&}#{&} {
        width: 6ch;
        margin-left: rem(5px);
        padding: 0;
        background-color: transparent;
        color: inherit;
        border: none;
        font-size: rem(36px);
        text-align: right;
      }
    }

    &__headline {
      font-size: rem(28px);
      line-height: rem(38px);
      text-align: left;
    }

    &__text {
      text-align: left;
    }

    .noUi-connect {
      background-color: #008800;
    }
  }
</style>
