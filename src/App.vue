<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.simform.com/static/logo.svg"
          transition="scale-transition"
          width="280"
        />
      </div>

      <!-- <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-content>
      <router-link to="/">Home</router-link> |
      <router-link to="/ingredients">Ingredients</router-link>
      <!-- <PickDate v-if="date === null" />
      <HelloWorld v-else /> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  updated: function() {
    const { history } = this.$router;

    if (history.current.path !== "/" && this.date === null) {
      history.push("/");
    }
  },

  computed: mapState(["date"]),

  data: () => ({}),
};
</script>
