#!/bin/bash

set -e

apt-get update && apt-get install openresolv wireguard-tools
cp /opt/sentinel-dvpn-desktop/bin/linux/sentinelcli /usr/local/bin/sentinelcli

cp /opt/sentinel-dvpn-desktop/scripts/linux/sentinelcli-vpn.service /etc/systemd/system
systemctl daemon-reload
systemctl enable sentinelcli-vpn.service
