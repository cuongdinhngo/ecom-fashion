import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#004CFF',
          secondary: '#6B7280',
          accent: '#8B5CF6',
          error: '#EF4444',
          info: '#3B82F6',
          success: '#08C514',
          warning: '#F59E0B',
          background: '#FFFFFF',
          surface: '#F9FAFB',
          'discount-surface': '#F1AEAE',
          'discount-badge-bg': '#F81140'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#4D82F3',
          secondary: '#9CA3AF',
          accent: '#A78BFA',
          error: '#F87171',
          info: '#60A5FA',
          success: '#34D399',
          warning: '#FBBF24',
          background: '#1F2937',
          surface: '#374151',
          'on-background': '#FFFFFF',
          'on-surface': '#F9FAFB'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi'
  }
})