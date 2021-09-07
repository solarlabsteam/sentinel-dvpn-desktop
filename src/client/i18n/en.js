export default {
  route: {
    home: {
      title: 'Current Plan'
    },
    changeLocation: {
      title: 'Change Location'
    },
    plans: {
      title: 'Plans'
    },
    checkout: {
      title: 'Checkout'
    },
    defaultDns: {
      title: 'Default DNS Server'
    }
  },

  onboarding: {
    first: {
      title: 'Military Grade Encryption',
      description: 'You can choose from WireGuard or OpenVPN servers which enforce quantum level encryption standards such as AES-256.'
    },
    second: {
      title: 'Absolute Transparency',
      description: 'Code behind the Sentinel dVPN is fully revealed to the public on Sentinel’s GitHub profile along with the application MD5 Checksums for absolute provability.'
    },
    third: {
      title: 'Servers Across the Globe',
      description: 'Servers are hosted all over the world by the community, for the community. Users can choose the optimal server for the fastest browsing and download speeds.'
    }
  },

  account: {
    createNewAccount: 'Create a new account',
    restoreAccount: 'I have a mnemonic',
    inputMnemonicLabel: 'Input your mnemonic'
  },

  connection: {
    connectedStatus: 'Connected',
    disconnectedStatus: 'Disconnected',
    securedIp: 'Secured',
    exposedIp: 'IP Address is Exposed',
    unknownIp: 'Unknown IP',
    checkingConnection: 'Checking the connection to the server',
    toggle: {
      on: 'on',
      off: 'off'
    }
  },

  quota: {
    unit: {
      day: {
        title: 'days left',
        description: 'pay-as-you-go'
      },
      gb: {
        title: 'gb',
        description: 'remaining of {count} GB'
      }
    }
  },

  node: {
    selected: {
      change: 'change'
    }
  },

  plan: {
    parameter: {
      country: {
        title: 'Country'
      },
      crypto: {
        title: 'Crypto'
      }
    },
    type: {
      unlimited: {
        title: 'Unlimited'
      }
    },
    unit: {
      gb: {
        title: 'gb'
      }
    },
    action: {
      buy: 'Buy'
    }
  },

  checkout: {
    scanQr: 'Scan the QR Code',
    message: {
      timer: 'Your transaction should be processed within'
    }
  },

  payment: {
    result: {
      status: {
        success: 'Successful',
        failed: 'Failed!'
      },
      action: {
        goHome: 'Go to home',
        checkPlans: 'Check plans'
      }
    },

    check: {
      hash: 'Ref No: {hash}'
    }
  }
}
