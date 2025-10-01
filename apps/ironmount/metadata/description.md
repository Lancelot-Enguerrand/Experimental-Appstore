<div align="center">
  <h1>Ironmount</h1>
  <h3>Keep your volumes in check!<br />One interface to manage all your storage</h3>
  <figure>
    <img src="https://github.com/nicotsx/ironmount/blob/main/screenshots/volume-details.png?raw=true" alt="Demo" />
    <figcaption>
      <p align="center">
        Volume details view with usage statistics and health check status
      </p>
    </figcaption>
  </figure>
</div>

## Intro

Ironmount is an easy to use web interface to manage your remote storage and mount them as local volumes on your server. Docker as a first class citizen, Ironmount allows you to easily mount your remote storage directly into your containers with few lines of code.

### Features

- ✅&nbsp; Support for multiple protocols: NFS, SMB, WebDAV, Directory
- 📡&nbsp; Mount your remote storage as local folders
- 🐳&nbsp; Docker integration: mount your remote storage directly into your containers via a docker volume syntax
- 🔍&nbsp; Keep an eye on your mounts with health checks and automatic remounting on error
- 📊&nbsp; Monitor your mounts usage with detailed statistics and graphs

### Coming soon

- 🔐&nbsp; User authentication and role management
- 💾&nbsp; Automated backups and snapshots with encryption, strategies and retention policies
- 🔄&nbsp; Re-exporting your mounts to other protocols (e.g. mount an NFS server as an SMB share with fine-grained permissions)
- ☁️&nbsp; Integration with cloud storage providers (e.g. AWS S3, Google Drive, Dropbox)
- 🔀&nbsp; Storage sharding and replication for high availability and performance

## Docker volume usage

![Preview](https://github.com/nicotsx/ironmount/blob/main/screenshots/docker-instructions.png?raw=true)

## Volume creation

![Preview](https://github.com/nicotsx/ironmount/blob/main/screenshots/volume-creation.png?raw=true)
