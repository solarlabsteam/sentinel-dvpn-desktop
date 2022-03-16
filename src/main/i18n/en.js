export default {
  translation: {
    connection: {
      error: {
        common: 'Please try again or try to connect to another node',
        noSubscription: 'Please select a node with an active subscription',
        noSession: 'Cannot create a session. $t(connection.error.common)',
        noBalance: 'Not enough tokens to broadcast - you\'ll need at least 0.01 DVPN on your account. Please, check your balance and try again later',
        allDataUsed: 'Data update is pending, but it seems you used all data. Do you want to resubscribe?',
        unavailableNode: 'Selected node is temporary unavailable. Please, try later or select another node'
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
      }
    },

    tray: {
      open: {
        label: 'Open'
      },
      exit: {
        label: 'Exit'
      }
    },

    dialog: {
      quit: {
        terminate: {
          message: 'dVPN connection is running. Would you like to keep it as a background process?',
          button: {
            kill: 'Kill',
            keep: 'Keep'
          }
        }
      },
      decryption: {
        warning: {
          title: 'Decryption is not available',
          message: 'The app may not work properly. Please, enable encryption and relaunch the app.'
        }
      },
      button: {
        cancel: 'Cancel'
      },
      checkbox: {
        dontAskAgain: 'Don\'t ask me again.'
      }
    },

    error: {
      rpc: {
        deadline: 'Request timed-out. Check your internet connection.'
      }
    }
  }
}
