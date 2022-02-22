import path from 'path'
import { Notification } from 'electron'

class Notifications {
  static create (options) {
    return new Notification({
      title: 'Sentinel dVPN',
      silent: false,
      timeoutType: 'default',
      icon: path.resolve(__static, 'assets/images/logo.png'),
      ...options
    })
  }

  static createCritical (text = 'Unexpected error') {
    return Notifications.create({ body: text, urgency: 'critical', timeoutType: 'never', subtitle: 'Error' })
  }
}

export default Notifications
