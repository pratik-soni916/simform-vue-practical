<template>
  <v-container>
    <v-row justify="center">
      <v-dialog value="1" persistent max-width="590">
        <v-card>
          <v-card-title class="headline">Select a "date to use to" proceed with the receipe.</v-card-title>
          <v-card-text>
            <v-date-picker full-width v-model="picker" color="green lighten-1"></v-date-picker>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text>Go!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PickDate",
  data: () => ({
    picker: new Date().toISOString().substr(0, 10)
  })
};
</script>
