import SlrButton from '@/client/components/ui/SlrButton'
import SlrLoader from '@/client/components/ui/SlrLoader'
import SlrLogo from '@/client/components/ui/SlrLogo'
import SlrIcon from '@/client/components/ui/SlrIcon'
import SlrTabs from '@/client/components/ui/SlrTabs'
import SlrTab from '@/client/components/ui/SlrTabs/SlrTab'
import SlrPopper from '@/client/components/ui/SlrPopper'
import SlrCopyButton from '@/client/components/ui/SlrCopyButton'
import SlrTable from '@/client/components/ui/SlrTable'
import SlrModal from '@/client/components/ui/SlrModal'
import SlrDrawer from '@/client/components/ui/SlrDrawer'
import SlrTextarea from '@/client/components/ui/SlrTextarea'
import SlrCard from '@/client/components/ui/SlrCard'
import SlrClipboardText from '@/client/components/ui/SlrClipboardText'
import SlrInput from '@/client/components/ui/SlrInput'
import SlrSearchInput from '@/client/components/ui/SlrSearchInput'

export default function registerSlrComponents (app) {
  app.component('SlrButton', SlrButton)
  app.component('SlrLoader', SlrLoader)
  app.component('SlrLogo', SlrLogo)
  app.component('SlrIcon', SlrIcon)
  app.component('SlrTabs', SlrTabs)
  app.component('SlrTab', SlrTab)
  app.component('SlrPopper', SlrPopper)
  app.component('SlrCopyButton', SlrCopyButton)
  app.component('SlrTable', SlrTable)
  app.component('SlrModal', SlrModal)
  app.component('SlrDrawer', SlrDrawer)
  app.component('SlrTextarea', SlrTextarea)
  app.component('SlrCard', SlrCard)
  app.component('SlrClipboardText', SlrClipboardText)
  app.component('SlrInput', SlrInput)
  app.component('SlrSearchInput', SlrSearchInput)
}
