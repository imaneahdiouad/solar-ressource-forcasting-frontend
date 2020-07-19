<template>
  <v-app id="dashboard">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item :to="{ name: 'home'}" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{ name: 'forecasting'}">
          <v-list-item-action>
            <v-icon>mdi-weather-partly-cloudy</v-icon>
          </v-list-item-action>
          <v-list-item-content>
              <v-list-item-title>Forecasting</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-weather-sunset</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Variability</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-stairs-up</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Clear Sky</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-shield-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Quality Check</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-wifi-strength-off</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Off line forecasting</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Solar Ressources Forecasting
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        style="max-width: 650px"
      >
        <v-img
          src="../assets/logo.png"
          height="50"
          max-height="50"
          contain
        ></v-img>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container
        id="app-container"
        class="fill-height"
        justify-start
      >
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer
      color="primary"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<style>
  #app-container{
    align-items: start;
    margin: 0;
    padding: 0;
  }
</style>
<script>
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  })
}
</script>
