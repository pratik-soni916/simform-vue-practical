<template>
  <v-container>
    <v-row justify="center">
      <v-dialog value="1" persistent max-width="590">
        <v-card>
          <v-card-title class="headline">
            Select a preffered lunch date to proceed with the receipe.
          </v-card-title>
          <v-card-text>
            <v-date-picker
              full-width
              v-model="picker"
              reactive
              color="green lighten-1"
            ></v-date-picker>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="setDate">Go!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { ACTIONS } from "store/constants";

console.log(ACTIONS.FETCH_INGREDIENTS_DATA);

export default {
  name: "PickDate",
  //   mounted() {
  //     this.fetchIngredientsList();
  //   },
  methods: {
    setDate() {
      const { picker: date } = this;
      this.goNext({ date });
    },
    ...mapActions({
      goNext: ACTIONS.SET_DATE,
      //   fetchIngredientsList: ACTIONS.FETCH_INGREDIENTS_DATA,
    }),
  },
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
  }),
};
</script>
