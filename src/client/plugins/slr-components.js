import SlrButton from '@/client/components/ui/SlrButton'
import SlrLoader from '@/client/components/ui/SlrLoader'
import SlrLogo from '@/client/components/ui/SlrLogo'
import SlrProgress from '@/client/components/ui/SlrProgress'
import SlrIcon from '@/client/components/ui/SlrIcon'
import SlrTimer from '@/client/components/ui/SlrTimer'
import SlrTabs from '@/client/components/ui/SlrTabs'
import SlrTab from '@/client/components/ui/SlrTabs/SlrTab'
import SlrCheckbox from '@/client/components/ui/SlrCheckbox'
import SlrPopper from '@/client/components/ui/SlrPopper'
import SlrCopyButton from '@/client/components/ui/SlrCopyButton'
import SlrTable from '@/client/components/ui/SlrTable'
import SlrModal from '@/client/components/ui/SlrModal'
import SlrDrawer from '@/client/components/ui/SlrDrawer'

export default function registerSlrComponents (app) {
  app.component('SlrButton', SlrButton)
  app.component('SlrLoader', SlrLoader)
  app.component('SlrLogo', SlrLogo)
  app.component('SlrProgress', SlrProgress)
  app.component('SlrIcon', SlrIcon)
  app.component('SlrTimer', SlrTimer)
  app.component('SlrTabs', SlrTabs)
  app.component('SlrTab', SlrTab)
  app.component('SlrCheckbox', SlrCheckbox)
  app.component('SlrPopper', SlrPopper)
  app.component('SlrCopyButton', SlrCopyButton)
  app.component('SlrTable', SlrTable)
  app.component('SlrModal', SlrModal)
  app.component('SlrDrawer', SlrDrawer)
}
