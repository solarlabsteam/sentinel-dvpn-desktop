#!/bin/bash

DIRECTORY=`dirname $0`

echo 'Install wireguard-tools'
apt-get update && apt-get install openresolv wireguard-tools

echo 'Copy sentinelcli'
cp $DIRECTORY/../../bin/linux/sentinelcli /usr/local/bin/sentinelcli

echo 'Create the daemon'
cp $DIRECTORY/../../scripts/linux/sentinelcli-vpn.service /etc/systemd/system
systemctl daemon-reload
systemctl enable sentinelcli-vpn.service
