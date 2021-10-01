#!/bin/bash

apt-get update && apt-get install openresolv wireguard-tools
cp ../../resources/linux/bin/sentinelcli /usr/local/linux/bin/sentinelcli
cp ../../dist_electron/sentinel-dvpn-desktop-0.1.0.AppImage /usr/bin/sentinel-dvpn-desktop
