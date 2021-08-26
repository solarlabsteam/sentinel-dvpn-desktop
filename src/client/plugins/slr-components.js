import SlrButton from '@/client/components/ui/SlrButton/SlrButton'
import SlrLoader from '@/client/components/ui/SlrLoader/SlrLoader'
import SlrLogo from '@/client/components/ui/SlrLogo/SlrLogo'
import SlrProgress from '@/client/components/ui/SlrProgress/SlrProgress'
import SlrIcon from '@/client/components/ui/SlrIcon/SlrIcon'

export default function registerSlrComponents (app) {
  app.component('slr-button', SlrButton)
  app.component('slr-loader', SlrLoader)
  app.component('slr-logo', SlrLogo)
  app.component('slr-progress', SlrProgress)
  app.component('slr-icon', SlrIcon)
}
