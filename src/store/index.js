import Vue from "vue";
import Vuex from "vuex";

import { ACTIONS, MUTATIONS } from "./constants";
import { getIngredients, getRecipes } from "@/utils/apis";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: null,
    ingredients: {
      isLoading: false,
      data: [],
    },
    recipes: {
      isLoading: false,
      data: [],
      isModalOpen: false,
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
    [MUTATIONS.SET_RECIPES](state, payload = {}) {
      const { isLoading = false } = payload;
      const data = payload.data || state.recipes.data;
      const isModalOpen =
        payload.isModalOpen !== undefined
          ? payload.isModalOpen
          : state.recipes.isModalOpen;

      state.recipes = { isLoading, data, isModalOpen };
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
    [ACTIONS.SET_RECIPES_LOADING]({ commit }, isLoading = true) {
      commit(MUTATIONS.SET_RECIPES, { isLoading });
    },
    [ACTIONS.SET_RECIPES_DATA]({ commit }, data) {
      commit(MUTATIONS.SET_RECIPES, { data });
    },
    [ACTIONS.SET_RECIPES_MODAL]({ commit }, isModalOpen = true) {
      commit(MUTATIONS.SET_RECIPES, { isModalOpen });
    },
    async [ACTIONS.FETCH_RECIPES_DATA]({ dispatch }, ingredients = []) {
      dispatch(ACTIONS.SET_RECIPES_LOADING, true);

      try {
        const data = await getRecipes(ingredients);

        dispatch(ACTIONS.SET_RECIPES_DATA, data);
        dispatch(ACTIONS.SET_RECIPES_MODAL, true);
      } catch (error) {
        console.log(error);
        dispatch(ACTIONS.SET_RECIPES_MODAL, true);
      }
      dispatch(ACTIONS.SET_RECIPES_LOADING, false);
    },
  },
  modules: {},
});
