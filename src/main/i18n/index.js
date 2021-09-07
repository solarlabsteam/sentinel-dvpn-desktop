import i18next from 'i18next'
import en from './en'

export default function initI18n () {
  return i18next.init({
    lng: 'en',
    resources: {
      en: en
    }
  })
}
