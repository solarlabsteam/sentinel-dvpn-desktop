export default {
  translation: {
    connection: {
      error: {
        common: 'Please try again or try to connect to another node',
        noSubscription: 'Please select a node with an active subscription',
        noSession: 'Cannot create a session. $t(connection.error.common)',
        noBalance: 'Not enough tokens to broadcast - you\'ll need at least 0.01 DVPN on your account. Please, check your balance and try again later'
      }
    },

    menu: {
      file: {
        label: 'File',
        submenu: {
          close: {
            label: 'Close'
          },
          exit: {
            label: 'Exit'
          }
        }
      },

      view: {
        label: 'View'
      },

      tray: {
        open: {
          label: 'Open'
        },
        exit: {
          label: 'Exit'
        }
      }
    }
  }
}
