import Vue from "vue";
import Vuex from "vuex";

import { ACTIONS, MUTATIONS } from "./constants";
import { getIngredients } from "@/utils/apis";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: null,
    ingredients: {
      isLoading: false,
      data: [],
    },
  },
  mutations: {
    [MUTATIONS.SET_DATE](state, { date = null } = {}) {
      state.date = date;
    },
    [MUTATIONS.SET_INGREDIENTS](state, payload = {}) {
      const { isLoading = false } = payload;
      const data = payload.data || state.ingredients.data;

      state.ingredients = { isLoading, data };
    },
  },
  actions: {
    [ACTIONS.SET_DATE]({ commit }, payload = {}) {
      commit(MUTATIONS.SET_DATE, payload);
    },
    [ACTIONS.SET_INGREDIENTS_LOADING]({ commit }, isLoading = true) {
      commit(MUTATIONS.SET_INGREDIENTS, { isLoading });
    },
    [ACTIONS.SET_INGREDIENTS_DATA]({ commit }, data) {
      commit(MUTATIONS.SET_INGREDIENTS, { data });
    },
    async [ACTIONS.FETCH_INGREDIENTS_DATA]({ dispatch }) {
      dispatch(ACTIONS.SET_INGREDIENTS_LOADING, true);

      try {
        const data = await getIngredients();

        dispatch(ACTIONS.SET_INGREDIENTS_DATA, data);
      } catch (error) {
        console.log(error);
      }
      dispatch(ACTIONS.SET_INGREDIENTS_LOADING, false);
    },
  },
  modules: {},
});
