#!/bin/bash

DIRECTORY=`dirname $0`

echo 'Installing wireguard-tools'
apt-get update && apt-get install openresolv wireguard-tools

echo 'Copying sentinelcli'
cp $DIRECTORY/../../bin/linux/sentinelcli /usr/local/bin/sentinelcli-dvpn-desktop

echo 'Creating the daemon'
cp $DIRECTORY/../../scripts/linux/sentinelcli-dvpn.service /etc/systemd/system
systemctl daemon-reload
systemctl enable sentinelcli-dvpn.service
