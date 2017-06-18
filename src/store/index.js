import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      overlay: false,
      step: 1,
      thankyou: false,
      model: (() => {
        const saved = sessionStorage.getItem('froschkoenige-widget');
        return saved ? JSON.parse(saved) : {
          type: 'card',
          amount: 10,
          exp_month: (() => {
            const month = (new Date()).getMonth();

            return month < 10 ? '' + month : '0' + month;
          })(),
          exp_year: (new Date()).getFullYear(),
        }
      })()
    },
    mutations: {
      toggleOverlay(state) {
        state.overlay = !state.overlay;
      },
      closeOverlay(state) {
        state.overlay = false;
      },
      updateModel(state, value) {
        state.model = Object.assign(state.model, value);
        state.model.amount = Math.floor(state.model.amount);
        sessionStorage.setItem('froschkoenige-widget', JSON.stringify(state.model));
      },
      resetStep(state) {
        state.step = 1;
      },
      nextStep(state) {
        state.step++;
      },
      previousStep(state) {
        state.step--;
      },
      showThankyou(state) {
        state.thankyou = true;
      },
    }
  })
;

export default store;
