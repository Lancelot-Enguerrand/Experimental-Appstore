# PruneMate

A sleek, lightweight web interface to **automatically clean up Docker resources** on a schedule.

**Keep your Docker host tidy with scheduled cleanup of unused images, containers, networks, and volumes.**

> ⚠️ **DISCLAIMER**: PruneMate deletes Docker resources. Ensure you understand what will be pruned before enabling automated schedules. The author is not responsible for any data loss or system issues. **Use at your own risk.**

---

## ✨ Features

- 🕐 **Flexible scheduling** - Daily, Weekly, or Monthly cleanup runs
- 🐳 **Multi-host support** - Manage multiple Docker hosts from one interface (requires docker-socket-proxy on remote hosts)
- 🧹 **Selective cleanup** - Choose what to prune: containers, images, networks, volumes
- 📊 **All-Time Statistics** - Track cumulative space reclaimed and resources deleted across all runs
- 🔔 **Notifications** - Gotify or ntfy.sh support with Bearer token & Basic Auth, optional change-only alerts

---

## 📷 Screenshots

### Main Dashboard
The overall look and feel of the PruneMate dashboard

<p align="center">
  <img width="400" height="800" src="https://github.com/user-attachments/assets/4e4eb62b-f812-4ec3-8fed-02aedca174db" />

</p>

### Main Dashboard - All-Time Statistics
Track cumulative prune statistics showing total space reclaimed, resources deleted, and run history.

<p align="center">
  <img width="400" height="400" alt="prunemate-statistics" src="https://github.com/user-attachments/assets/206d9787-58d8-4756-ab7f-d5b9dccfad5d" /> 
</p>

### Schedule Configuration
Configure when and how often PruneMate should clean up your Docker resources.

<p align="center">
  <img width="400" height="400" alt="prunemate-schedule" src="https://github.com/user-attachments/assets/3a822897-5ede-4476-b570-f4d8adf37867" /> 
</p>

### Cleanup Options
Select which Docker resources to clean up and configure advanced options.

<p align="center">
  <img width="400" height="400" alt="prunemate-cleanup" src="https://github.com/user-attachments/assets/70ae1e8f-49a1-4c89-ac46-685d804ee3db" />
</p>

### External Docker hosts
Add external Docker hosts via [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy)

<p align="center">
  <img width="400" height="400" alt="prunemate-cleanup" src="https://github.com/user-attachments/assets/28abdbe4-bd9e-4272-a6fc-24a4a8dc83bb" />
</p>

### Notification Settings
Set up notifications via Gotify or ntfy.sh to stay informed about cleanup results.

<p align="center">
  <img width="400" height="400" alt="prunemate-notifications" src="https://github.com/user-attachments/assets/73a06c4d-fffa-40eb-a010-239d7d364004" /> 
</p>

### Cleanup Results
Get detailed statistics notifications about what was cleaned and how much space was reclaimed.

Gotify :
<p align="center">
  <img width="400" height="400" alt="prunemate-results" src="https://github.com/user-attachments/assets/757ce7d2-7e7e-409b-ae01-745262a067c7" />

</p>

ntfy :
<p align="center">
  <img width="400" height="400" alt="prunemate-results" src="https://github.com/user-attachments/assets/fd214db5-34ef-4e3b-8c73-b78262964739" />

</p>

## 🔔 Notification Setup

### Gotify

[Gotify](https://gotify.net/) is a self-hosted notification service.

**Setup steps:**
1. Install and run Gotify server
2. Create a new application in Gotify
3. Copy the application token
4. Configure in PruneMate:
   - **Provider:** Gotify
   - **URL:** `https://your-gotify-server.com`
   - **Token:** Your application token

### ntfy.sh

[ntfy.sh](https://ntfy.sh/) is a simple pub-sub notification service (self-hosted or public).

**Setup steps:**
1. Choose a unique topic name (e.g., `prunemate-alerts`)
2. Configure in PruneMate:
   - **Provider:** ntfy
   - **URL:** `https://ntfy.sh` (or your self-hosted instance, supports `username:password@host` format)
   - **Topic:** Your chosen topic name
   - **Token:** (Optional) Bearer token for authentication

**Authentication options:**
- **Bearer token:** Recommended for API access tokens (higher priority)
- **URL credentials:** Use `https://username:password@ntfy.example.com` format (RFC 3986 compliant)
- **No authentication:** Works with public topics

**Subscribe to notifications:**
- **Web:** Visit `https://ntfy.sh/your-topic`
- **Mobile:** Install the ntfy app ([Android](https://play.google.com/store/apps/details?id=io.heckel.ntfy) / [iOS](https://apps.apple.com/app/ntfy/id1625396347)) and subscribe to your topic
- **Desktop:** Use ntfy desktop app or web browser

---

## 🌐 Multi-Host Setup (Optional)

PruneMate can manage multiple Docker hosts from a single interface. Each prune operation runs across all enabled hosts with aggregated results.

### Security First: Use Docker Socket Proxy

⚠️ **Never expose Docker sockets directly!** Always use [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) to limit API access.

### Quick Setup

**1. Deploy proxy on each remote host:**

```yaml
services:
  dockerproxy:
    image: ghcr.io/tecnativa/docker-socket-proxy:latest
    environment:
      - CONTAINERS=1
      - IMAGES=1
      - NETWORKS=1
      - VOLUMES=1
      - POST=1          # Required for prune operations
    ports:
      - "2375:2375"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    restart: unless-stopped
```

**2. Add hosts in PruneMate UI:**
- Navigate to **Docker Hosts** section
- Click **Add New Host**
- Enter name (e.g., "NAS") and URL (e.g., `tcp://192.168.1.50:2375`)
- Toggle hosts on/off as needed

**3. Test connection:**
Click **Run now** and check logs for successful connection to all hosts.


### Troubleshooting

- **Connection refused**: Verify proxy is running (`docker ps`) and port 2375 is accessible
- **Permission denied**: Ensure proxy has `POST=1` environment variable
- **Host skipped**: Check URL format starts with `tcp://`, `http://`, or `https://`

---

## 📬 Support

Have questions or need help?

- 🐛 **Bug reports:** [Open an issue on GitHub](https://github.com/anoniemerd/PruneMate/issues)
- 💡 **Feature requests:** [Open an issue on GitHub](https://github.com/anoniemerd/PruneMate/issues)
- 💬 **Questions & Discussion:** [Start a discussion on GitHub](https://github.com/anoniemerd/PruneMate/discussions)
- ⭐ **Like PruneMate?** Give it a star!
