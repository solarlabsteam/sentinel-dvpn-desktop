#!/bin/bash

echo 'Copying sentinelcli'
cp /opt/Sentinel\ dVPN/bin/linux/sentinelcli /usr/local/bin/sentinelcli

echo 'Creating the daemon'
cp /opt/Sentinel\ dVPN/scripts/linux/sentinelcli-vpn.service /etc/systemd/system
systemctl daemon-reload
systemctl enable sentinelcli-vpn.service
systemctl start sentinelcli-vpn.service
