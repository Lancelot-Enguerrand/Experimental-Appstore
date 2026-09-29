# MyNeS - My Network Scanner

### **See every device on your home network - including the Zigbee, Z-Wave, Matter and Bluetooth LE ones an IP scan cannot find.**

MyNeS discovers, identifies and monitors every device on your LAN. Beyond ARP and port scanning it speaks mDNS/Bonjour, SSDP/UPnP, Matter, Bluetooth LE **and MQTT**, so radio devices that have no IP address at all - Zigbee bulbs behind Zigbee2MQTT, Z-Wave sensors behind Z-Wave JS, BLE trackers, Tasmota nodes - show up in the same list as your servers and phones.

## Features

* **Multi-protocol discovery** - ARP, mDNS, SSDP/UPnP, Matter, Bluetooth LE and MQTT in one scan.
* **Device inventory** - vendor lookup over a 1000+ entry OUI database, automatic device-type classification, editable aliases and notes.
* **Topology & graph views** - see how devices connect, grouped by subnet and uplink.
* **Monitoring & alerts** - rule-based alerts when a device appears, disappears or changes, delivered by Web Push, webhook, e-mail or straight into Home Assistant.
* **Two-way Home Assistant integration** - MQTT Discovery pushes devices in as entities; the REST/WebSocket pull compares what HA knows against what the network actually shows.
* **No cloud, no account, no telemetry.** Everything stays on your LAN. Turkish and English UI, light and dark themes, mobile-friendly PWA.

# Usage

MyNeS runs on the **host network** so raw ARP frames and mDNS/SSDP multicast reach the whole LAN, and requests `NET_ADMIN`/`NET_RAW`. Without those it degrades to a ping sweep plus the OS ARP cache and finds fewer devices (the container still runs unprivileged).

Open MyNeS on host port **5883** after install and start your first scan. **Only scan networks you own.**

### Optional sign-in

MyNeS lists every device on your network, so on an open LAN you may want a login gate. Turn on **Require sign-in** and set a username and password in the app config - the gate then comes up on next start. It stays off by default so a fresh install is reachable.

### Optional integrations

* **MQTT broker host** - reveals Zigbee2MQTT / Z-Wave JS / Tasmota devices.
* **Home Assistant URL + token** - enables the two-way HA integration.

Project home, screenshots and full documentation: https://github.com/fxerkan/my_network_scanner
