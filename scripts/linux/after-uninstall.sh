#!/bin/bash

echo 'Removing configs'
rm -rf ~/.config/sentinel-dvpn-desktop

echo 'Removing sentinelcli'
rm -rf /usr/local/bin/sentinelcli

echo 'Removing the daemon'
systemctl stop sentinelcli-vpn.service
systemctl disable sentinelcli-vpn.service
rm /etc/systemd/system/sentinelcli-vpn.service
# rm /etc/systemd/system/multi-user.target.wants/sentinelcli-vpn.service
systemctl daemon-reload
systemctl reset-failed
