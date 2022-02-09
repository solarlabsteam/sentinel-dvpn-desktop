#!/bin/bash

# Get the root user
if [ $SUDO_USER ];
	then getSudoUser=$SUDO_USER;
	else getSudoUser=`whoami`;
fi

appDirectory=/home/$getSudoUser/.config/Sentinel\ dVPN/;
if [ -d "$appDirectory" ]; then
    echo 'Removing the configs'
    rm -rf "$appDirectory";
fi

sentinelcliDirectory=/home/$getSudoUser/.sentinelcli-dvpn-desktop/;
if [ -d "$sentinelcliDirectory" ]; then
    echo 'Removing the sentinelcli configs'
    rm -rf "$sentinelcliDirectory";
fi

vpnDaemonFile=/etc/systemd/system/sentinelcli-dvpn.service
if [ -f "$vpnDaemonFile" ]; then
  echo 'Removing the daemon'
  systemctl stop sentinelcli-dvpn.service
  systemctl disable sentinelcli-dvpn.service
  rm "$vpnDaemonFile"
  # rm /etc/systemd/system/multi-user.target.wants/sentinelcli-dvpn.service
  systemctl daemon-reload
  systemctl reset-failed
fi

keyringPid=$(pgrep -f "sentinelcli-dvpn-desktop.+\--with-keyring") || keyringPid=0
if [ $keyringPid -gt 0 ]; then
  echo 'Killing a sentinelcli keyring process'
  kill $keyringPid
fi

echo 'Copying sentinelcli'
cp /opt/Sentinel\ dVPN/bin/linux/sentinelcli-dvpn-desktop /usr/local/bin/sentinelcli-dvpn-desktop

echo 'Creating the daemon'
cp /opt/Sentinel\ dVPN/scripts/linux/sentinelcli-dvpn.service /etc/systemd/system
systemctl daemon-reload
systemctl enable sentinelcli-dvpn.service
systemctl start sentinelcli-dvpn.service
