#!/bin/bash

echo 'Copying sentinelcli'
cp /opt/sentinel-dvpn-desktop/bin/linux/sentinelcli /usr/local/bin/sentinelcli

echo 'Creating the daemon'
cp /opt/sentinel-dvpn-desktop/scripts/linux/sentinelcli-vpn.service /etc/systemd/system
systemctl daemon-reload
systemctl enable sentinelcli-vpn.service
systemctl start sentinelcli-vpn.service
