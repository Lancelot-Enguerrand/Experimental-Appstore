# DumbAssets
A stupid simple asset tracker for keeping track of your physical assets, their components, and applicable warranties and routine maintenance.

<p align="center">
  <img width=75% src="https://github.com/user-attachments/assets/ec310325-c3e4-4fc1-ba53-5cca5cd74c85" />
</p>

<p align="center">
  <a href="https://dumbassets.dumbware.io" target="_blank">Demo</a>
</p>

## Features

- 🚀 Track assets with detailed info (model, serial, warranty, etc.)
- 🧩 Add components and sub-components
- 🖼️ Upload and store photos and receipts
- 🔍 Search by name, model, serial, or description
- 🏷️ Hierarchical organization of components
- 📅 Warranty expiration notifications (configurable)
- 🔧 Maintenance event notifications
- 🏷️ Flexible tagging system for better organization
- 🔔 Built in Apprise notification integration
- 🌗 Light/Dark mode with theme persistence
- 🛡️ PIN authentication with brute force protection
- 📦 Docker support for easy deployment
- 🔗 Direct Asset Linking: Notifications include links to the specific asset

## Configuration

### Environment Variables

| Variable         | Description                                 | Default            | Required |
|------------------|---------------------------------------------|--------------------|----------|
| DUMBASSETS_PIN   | PIN protection (4+ digits)                  | None               | No       |
| APPRISE_URL      | Apprise URL for notifications               | None               | No       |
| SITE_TITLE       | Site title shown in browser tab and header  | DumbAssets         | No       |
| ALLOWED_ORIGINS  | Origins allowed to visit your instance      | '*'                | No       |
| DEMO_MODE        | Enables read-only mode                      | false              | No       |

### Data Storage

All data is stored in JSON files in the `/data` directory:

- `/data/Assets.json` - All asset data
- `/data/SubAssets.json` - All component data
- `/data/Images` - Uploaded photos
- `/data/Receipts` - Uploaded receipts
- `/data/config.json` - Notification and app config

## [Support the Project](https://www.buymeacoffee.com/dumbware)

Made with ❤️ by [DumbWare.io](https://dumbware.io)
