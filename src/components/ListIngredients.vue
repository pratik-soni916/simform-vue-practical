<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" md="6">
        <v-card max-width="600" class="mx-auto" scrollable>
          <v-toolbar color="light-blue" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Ingredients</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-view-module</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line subheader>
            <v-list-item
              v-for="item in ingredients"
              :key="item.title"
              @click="nothing"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="'Use by: ' + item.useBy"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action v-if="selectedItmes.indexOf(item.title) >= 0">
                <v-btn icon>
                  <v-icon color="blue lighten-1" dense>mdi-check</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-action v-else @click="addItem(item)">
                <v-btn icon>
                  <v-icon color="green lighten-1" dense>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6" md="6">
        <v-card max-width="600" class="mx-auto">
          <v-card-title>Selected ingredients</v-card-title>
          <v-card-text>
            <v-chip
              v-for="item in selectedItmes"
              :key="item"
              class="ma-2"
              close
              color="teal"
              text-color="white"
              close-icon="mdi-close"
              @click:close="removeItem(item)"
              text="item"
            >
              {{ item }}
            </v-chip>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="submit"
              :disabled="isSubmitDisabled"
            >
              Get Recipes!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <ListRecipes />
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";

import ListRecipes from "./ListRecipes.vue";
import { ACTIONS } from "@/store/constants";

export default {
  name: "ListIngredients",
  components: { ListRecipes },
  mounted() {
    this.fetchIngredientsList();
  },
  methods: {
    removeItem(item) {
      const mySet = new Set([...this.selectedItmes.map((i) => i)]);
      mySet.delete(item);
      this.selectedItmes = [...mySet];
    },
    addItem(item) {
      const mySet = new Set([...this.selectedItmes.map((i) => i)]);
      mySet.add(item.title);
      this.selectedItmes = [...mySet];
    },
    submit() {
      this.fetchRecipes([...new Set([...this.selectedItmes.map((i) => i)])]);
    },
    nothing() {},
    ...mapActions({
      fetchIngredientsList: ACTIONS.FETCH_INGREDIENTS_DATA,
      fetchRecipes: ACTIONS.FETCH_RECIPES_DATA,
    }),
  },
  computed: mapState({
    ingredients: ({ ingredients: { data = [] } = {}, date }) => {
      return data.filter(
        ({ useBy }) => new Date(useBy).getTime() >= new Date(date).getTime(),
      );
    },
    isLoading: ({ ingredients: { isLoading = false } = {} }) => isLoading,
    isSubmitDisabled() {
      return this.selectedItmes.length === 0;
    },
  }),
  data: () => ({
    selectedItmes: [],
  }),
};
</script>
