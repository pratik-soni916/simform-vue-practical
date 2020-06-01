<template>
  <v-dialog v-model="isOpen" @click:outside="closeModal">
    <v-card>
      <v-toolbar color="light-blue" dark class="headline">
        Wow your recipes are ready!
      </v-toolbar>
      <v-card-text>
        <v-row justify="center">
          <v-col
            col="4"
            md="4"
            sm="6"
            v-for="item in recipeData"
            :key="item.title"
          >
            <v-card min-height="200">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <v-chip
                  class="ma-2"
                  color="red"
                  text-color="white"
                  v-for="ele in item.ingredients"
                  :key="ele"
                  ingredients
                >
                  {{ ele }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
.text-center {
  text-align: center;
  display: block;
}
</style>

<script>
import { mapState, mapActions } from "vuex";

import { ACTIONS } from "@/store/constants";

export default {
  name: "ListRecipes",
  methods: {
    closeModal() {
      this.closeRecipeModal(false);
    },
    ...mapActions({
      closeRecipeModal: ACTIONS.SET_RECIPES_MODAL,
    }),
  },
  computed: mapState({
    isOpen: ({ recipes: { isModalOpen = false } }) => isModalOpen,
    recipeData: ({ recipes: { data = [] } }) => data,
  }),
  data: () => ({
    dialog: true,
  }),
};
</script>
