if (!('Notification' in window)) {
  window.logger.error('Notifications disabled')
}

export default function useNotification () {
  const show = async options => {
    const permission = await Notification.requestPermission()
    console.log(permission)
    if (permission === 'granted') {
      return doNotify(options)
    }
  }

  const showError = async options => {
    return await show({
      requireInteraction: true,
      ...options
    })
  }

  function doNotify (title, options) {
    return new Notification(title, {
      title: 'Sentinel dVPN',
      icon: 'assets/images/logo.png',
      ...options
    })
  }

  return { show, showError }
}
