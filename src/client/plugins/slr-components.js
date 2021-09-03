import SlrButton from '@/client/components/ui/SlrButton'
import SlrLoader from '@/client/components/ui/SlrLoader'
import SlrLogo from '@/client/components/ui/SlrLogo'
import SlrProgress from '@/client/components/ui/SlrProgress'
import SlrIcon from '@/client/components/ui/SlrIcon'
import SlrTimer from '@/client/components/ui/SlrTimer'

export default function registerSlrComponents (app) {
  app.component('slr-button', SlrButton)
  app.component('slr-loader', SlrLoader)
  app.component('slr-logo', SlrLogo)
  app.component('slr-progress', SlrProgress)
  app.component('slr-icon', SlrIcon)
  app.component('slr-timer', SlrTimer)
}
