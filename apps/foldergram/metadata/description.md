# Foldergram

Local-only photo and video gallery for folders, with an Instagram-inspired browsing pattern.

![](https://github.com/foldergram/foldergram/raw/main/client/public/github_banner.png)

*Public demo:* [foldergram.intentdeep.com](https://foldergram.intentdeep.com/)


---

## Features

- **Instagram-Inspired UI:** Enjoy a familiar feed layout, dedicated app folders (profiles), and a media viewer.
- Home feed with `Recent`, `Rediscover`, and `Random` modes.
- A top rail that shows `Moments` when capture-date coverage is strong, or `Highlights` when it is not.
- Library browsing with App Folder search, sorting, and delete actions.
- App Folder pages with a posts grid and a `Reels` tab when videos exist.
- Local likes stored in SQLite.
- Image and video support with generated derivatives for fast browsing.
- Optional shared-password protection for local and homelab access.
- Settings actions for manual scan, thumbnail rebuild, and full library rebuild.
- No multi-user accounts, cloud sync, uploads, comments, messaging, notifications, or remote APIs.

## How It Works

**Foldergram** indexes supported media from a configured `GALLERY_ROOT`, stores metadata in SQLite, generates thumbnails and previews. It maps directly to your filesystem:

1. **App Folders:** Any non-hidden folder under `GALLERY_ROOT` that directly contains supported media becomes one indexed App Folder.
2. **Posts:** Each supported image or video directly inside that folder becomes one indexed post.
3. **Nested folders stay separate:** Nested local folders are not merged into their parent App Folder. If a nested folder directly contains supported media, it becomes its own App Folder with parent folder name in the route (e.g. /folder/parent-nested).
4. **Root files are ignored:** Files placed directly in `GALLERY_ROOT` are ignored.

Runtime reads come from SQLite and generated derivatives, not from live filesystem scans on every request.

### Supported Formats

- **Images:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- **Videos:** `.mp4`, `.mov`, `.m4v`, `.webm`, `.mkv`

For source installs, video support requires `ffmpeg` and `ffprobe`. The Docker image installs them inside the container.
