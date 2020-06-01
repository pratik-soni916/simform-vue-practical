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
            <v-btn color="green darken-1" text @click="goNext">Go!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { ACTIONS } from "@/store/constants";

export default {
  name: "PickDate",
  methods: {
    goNext() {
      const { picker: date } = this;
      this.setDate({ date });
      this.$router.history.push("/ingredients");
    },
    ...mapActions({
      setDate: ACTIONS.SET_DATE,
    }),
  },
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
  }),
};
</script>
