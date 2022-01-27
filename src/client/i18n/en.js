export default {
  route: {
    home: {
      title: 'Current Plan'
    },
    changeLocation: {
      title: 'Nodes',
      tab: {
        subscriptions: {
          title: 'Subscribed'
        },
        nodes: {
          title: 'Available nodes'
        }
      }
    },
    plans: {
      title: 'Plans'
    },
    checkout: {
      title: 'Checkout'
    },
    settings: {
      title: 'Default DNS'
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
    restoreAccount: 'Import account',
    inputMnemonicLabel: 'Input your mnemonic',
    balance: 'Account balance',
    saveMnemonicNote: 'Please keep record of these phrases exactly, this will never be recovered in any condition.',
    wallet: 'Wallet Address',
    mnemonic: 'Mnemonic'
  },

  connection: {
    disconnectLabel: 'Disconnect',
    checkingConnection: 'Checking the connection to the server',
    connectNowButton: 'Connect Now',
    quotaMessage: 'Data used'
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
    },
    list: {
      noData: 'No available nodes found'
    },
    parameters: {
      price: 'Price',
      latency: 'Latency',
      peers: 'Peers',
      address: 'Node Address',
      connectedPeers: 'Connected peers count',
      uploadSpeed: 'Upload speed',
      provider: 'Node provider',
      downloadSpeed: 'Download speed',
      version: 'Version',
      type: 'Type of node',
      country: 'Country',
      city: 'City'
    }
  },

  continent: {
    parameters: {
      availableNode: '{count} available nodes'
    }
  },

  subscription: {
    list: {
      noData: 'No subscriptions found'
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
    },
    warning: {
      lessBytes: 'Subscription to the node may get a less bytes allocated than expected because the calculation for bytes is based on the smallest token value'
    }
  },

  checkout: {
    scanQr: 'Scan QR code to receive',
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
  },

  action: {
    copy: 'Copy',
    copied: 'Copied!',
    back: 'Back',
    subscribe: 'Subscribe',
    topUp: 'Top-up with Solar Pay',
    continue: 'Continue'
  },

  subscriptionModal: {
    header: 'How much DVPN do you want to spent?'
  }
}
