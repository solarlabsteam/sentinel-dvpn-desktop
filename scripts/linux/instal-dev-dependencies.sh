#!/bin/bash

set -e

DIRECTORY=`dirname $0`

apt-get update && apt-get install openresolv wireguard-tools
cp $DIRECTORY/../../bin/linux/sentinelcli /usr/local/bin/sentinelcli

cp $DIRECTORY/../../scripts/linux/sentinelcli-vpn.service /etc/systemd/system
systemctl daemon-reload
systemctl enable sentinelcli-vpn.service
