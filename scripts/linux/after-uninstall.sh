#!/bin/bash

echo 'Remove sentinelcli'
rm -rf /usr/local/bin/sentinelcli

echo 'Remove the daemon'
systemctl stop sentinelcli-vpn.service
systemctl disable sentinelcli-vpn.service
rm /etc/systemd/system/sentinelcli-vpn.service
# rm /etc/systemd/system/multi-user.target.wants/sentinelcli-vpn.service
systemctl daemon-reload
systemctl reset-failed
