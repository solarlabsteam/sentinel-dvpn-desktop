import { Notification } from 'electron'
import path from 'path'

class Notifications {
  static create (options) {
    return new Notification({
      title: 'Sentinel DVPN',
      silent: false,
      timeoutType: 'default',
      icon: path.resolve(__static, 'assets/images/logo.png'),
      ...options
    })
  }

  static createCritical (text = 'Unexpected error') {
    console.trace(text)
    return Notifications.create({ body: text, urgency: 'critical', timeoutType: 'never', subtitle: 'Error' })
  }
}

export default Notifications
