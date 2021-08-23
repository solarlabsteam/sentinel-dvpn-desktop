import SlrButton from '@/client/components/ui/SlrButton/SlrButton'
import SlrLoader from '@/client/components/ui/SlrLoader/SlrLoader'
import SlrLogo from '@/client/components/ui/SlrLogo/SlrLogo'

export default function registerSlrComponents (app) {
  app.component('slr-button', SlrButton)
  app.component('slr-loader', SlrLoader)
  app.component('slr-logo', SlrLogo)
}
