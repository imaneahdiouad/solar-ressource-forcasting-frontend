<template>
<v-container>
  <v-col cols="12">
    <v-row align="center" justify="center" class="text-h4">
      Geographical Location of study site
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-text-field
          label="Station"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          label="Latitude"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          label="Longitude"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          label="Altitude"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
  </v-col>
  <v-col cols="12">
    <v-row>
      <v-col cols="5">
          <v-row>
            <v-select
              :items="[]"
              label="Forecasting Horizon"
              outlined
            ></v-select>
          </v-row>
          <v-row>
            <v-btn class="mt-2" block color="primary">Run Forecast</v-btn>
          </v-row>
          <v-row>
            <v-btn class="mt-2" block color="warning">Clear Forecast</v-btn>
          </v-row>
          <v-row>
            <v-col cols="3" class="d-flex justify-center align-center">
              <div class="text-subtitle-1">
                Export Data
              </div>
            </v-col>
            <v-col cols="9">
              <v-file-input label="Browse"></v-file-input>
            </v-col>
          </v-row>
      </v-col>
      <v-col cols="1" class="d-flex flex-column">
        <v-divider style="align-self: center" vertical></v-divider>
      </v-col>
      <v-col cols="6">
        <JSCharting :options="options" class="columnChart"></JSCharting>
      </v-col>
    </v-row>
  </v-col>
</v-container>
</template>

<script>
import JSCharting from 'jscharting-vue'
export default {
  name: 'Forecasting',
  data () {
    return {
      name: 'columnChart',
      options: {
        debug: true,
        type: 'line',
        title_label_text: 'Solar Resources',
        legend_position: 'inside bottom right',
        toolbar_items: {
        },
        xAxis: { scale_type: 'numeric' },
        series: [
          {
            points: [
              ['0.3', 0.9],
              ['0.4', 0.5],
              ['0.5', 0.4],
              ['0.6', 0.2],
              ['0.7', 0.7],
              ['0.9', 0.8]
            ]
          }
        ]
      }
    }
  },
  components: {
    JSCharting
  }
}
</script>

<style scoped>

</style>
