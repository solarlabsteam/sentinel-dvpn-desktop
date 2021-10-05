#!/bin/bash

rm -rf /usr/local/bin/sentinelcli

systemctl stop sentinelcli-vpn.service
systemctl disable sentinelcli-vpn.service
rm /etc/systemd/system/sentinelcli-vpn.service
# rm /etc/systemd/system/multi-user.target.wants/sentinelcli-vpn.service
systemctl daemon-reload
systemctl reset-failed
