import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#046a0f',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      },
      light: {
        primary: colors.teal.darken2,
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
})
