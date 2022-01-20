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

vpnDaemonFile=/etc/systemd/system/sentinelcli-vpn.service
if [ -f "$vpnDaemonFile" ]; then
  echo 'Removing the daemon'
  systemctl stop sentinelcli-vpn.service
  systemctl disable sentinelcli-vpn.service
  rm "$vpnDaemonFile"
  # rm /etc/systemd/system/multi-user.target.wants/sentinelcli-vpn.service
  systemctl daemon-reload
  systemctl reset-failed
fi

keyringPid=$(pgrep -f "sentinelcli.+\--with-keyring") || keyringPid=0
if [ $keyringPid -gt 0 ]; then
  echo 'Killing a sentinelcli keyring process'
  kill $keyringPid
fi
