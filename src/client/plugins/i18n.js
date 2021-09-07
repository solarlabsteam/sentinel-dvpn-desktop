import { createI18n } from 'vue-i18n'
import messages from '@/client/i18n'

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
