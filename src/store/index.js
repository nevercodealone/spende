import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    overlay: false,
    step: 1,
    model: (() => {
      const saved = sessionStorage.getItem('froschkoenige-widget');
      return saved ? JSON.parse(saved) : {
        type: 'card',
        amount: 10,
      }
    })()
  },
  mutations: {
    toggleOverlay (state) {
      state.overlay = !state.overlay;
    },
    closeOverlay (state) {
      state.overlay = false;
    },
    updateModel (state, value) {
      state.model = Object.assign(state.model, value);
      state.model.amount = Math.floor(state.model.amount);
      sessionStorage.setItem('froschkoenige-widget', JSON.stringify(state.model));
    },
  }
});

export default store;
