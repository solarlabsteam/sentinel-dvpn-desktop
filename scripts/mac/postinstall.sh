#!/bin/bash

set -e

if ! command -v brew &> /dev/null
then
    echo "Brew not found"
    echo "Installing brew"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    exit
fi

echo 'Installing wireguard-tools'
brew install wireguard-tools

echo 'Copying sentinelcli'
cp /opt/sentinel-dvpn-desktop/bin/mac/sentinelcli /usr/local/bin/sentinelcli

echo 'Creating the daemon'
cp /opt/sentinel-dvpn-desktop/scripts/mac/com.sentinel.SentinelcliVpn.plist /Library/LaunchDaemons
launchctl load /Library/LaunchDaemons/com.sentinel.SentinelcliVpn.plist
launchctl start com.sentinel.SentinelcliVpn

exit 0
