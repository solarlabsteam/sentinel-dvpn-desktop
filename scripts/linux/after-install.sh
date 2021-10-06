#!/bin/bash

set -e

echo 'Install wireguard-tools'
apt-get update && apt-get install openresolv wireguard-tools

echo 'Copy sentinelcli'
cp /opt/sentinel-dvpn-desktop/bin/linux/sentinelcli /usr/local/bin/sentinelcli

echo 'Create the daemon'
cp /opt/sentinel-dvpn-desktop/scripts/linux/sentinelcli-vpn.service /etc/systemd/system
systemctl daemon-reload
systemctl enable sentinelcli-vpn.service
