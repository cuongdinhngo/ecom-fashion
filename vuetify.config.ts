import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#4F46E5',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#F3F4F6',
          surface: '#FFFFFF',
          'on-background': '#000000',
          'on-surface': '#3e3d3d',
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#4F46E5',
          secondary: '#03DAC6',
          accent: '#03DAC5',
          error: '#CF6679',
          info: '#6200EE',
          success: '#03DAC5',
          warning: '#FF9800',
          background: '#1F2937',
          surface: '#374151',
          'on-background': '#FFFFFF',
          'on-surface': '#F9FAFB',
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi'
  }
});