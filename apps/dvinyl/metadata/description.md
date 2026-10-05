# DVinyl
**DVinyl** is a modern, self-hostable collection manager for physical media lovers.
Catalog, value and organize your vinyls, CDs, books, movies, games and more, all from one cozy place.
It lives on your own server, pulls in cover
art and metadata from the big databases (Discogs, Hardcover, Open Library, TMDB, IGDB, ScreenScraper,
Rebrickable, BoardGameGeek), can even estimate what your music is worth, and lays it all out on a dashboard you
get to shape yourself.

DVinyl is **plugin based**: every media type is a plugin, so you turn on only what you
care about, and you can add your own type without touching the core.

Want to see it before installing anything? Have a look at the [live demo](https://demo.kyonew.me/), a
read-only preview of a finished instance.

## What it can do

### 📦 Your whole shelf, in one place
- **Many formats.** Music (vinyls, CDs, cassettes), books (manga, comics, hardcover), movies
  (Blu-ray, 4K, DVD, VHS, LaserDisc), video games, LEGO sets and board games.
- **Multiple views & virtual shelves.** Browse in a grid, a compact table, or as realistic virtual
  shelves with spine view and customizable furniture.
- **Lists & playlists.** Curate custom lists within a collection and assemble tracks into playlists.
- **Multiple collections.** Keep separate libraries (yours, the family's, by room) and switch in one click.
- **Smart import & barcode scanner.** Add items by ID, scan physical barcodes with your camera, or
  bulk import existing libraries (Discogs, Goodreads).
- **Market value & price history.** Live valuation estimates for your music collection with historical
  charts over time.
- **Game completion times.** Playtime estimates powered by IGDB.
- **Printable labels.** Generate printable QR codes and barcodes for your physical media.
- **Wishlist.** Keep track of items you are hunting for.

### 🎨 Make it yours
- **14 color themes.** Ocean, Forest, Sunset, Sakura, Midnight and more, with light and dark variants.
- **Modular dashboard.** Pick your stat widgets and add custom navigation shortcuts.
- **Collection info page.** Add a rich Markdown presentation page with photos for your collections.
- **Responsive.** Designed to feel natural on desktop, tablet and mobile.
- **Multilingual.** English, French, German, Spanish and Italian.

### 👥 Share it, your way
- **Users and roles.** Invite people to a collection as admin, editor or viewer, so everyone gets
  the right level of access.
- **SSO login (OIDC).** Optional single sign-on with providers like Authentik, Keycloak, Authelia
  or pocketID, with optional automatic account creation from an identity provider group.
- **Private or shared.** Keep your collection to yourself or open it up for others to browse.
- **Public share links.** Generate a read-only link or QR code so anyone can browse a collection
  (or just part of it, e.g. only Vinyls) without an account.

## Built-in plugins

| Plugin | Media | Metadata source |
| :----- | :---- | :-------------- |
| Music  | Vinyls, CDs, cassettes | Discogs |
| Books  | Books, manga, comics   | Hardcover, Open Library |
| Movies | Blu-ray, 4K, DVD, VHS  | TMDB |
| Games  | Video games            | IGDB, ScreenScraper |
| LEGO   | LEGO sets              | Rebrickable |
| Board games | Board games       | BoardGameGeek |

Every plugin can be turned on or off per collection from the admin panel.

## Build your own type

DVinyl is made to grow with you. There are two ways to add a new kind of collection:

- **Plugin editor (no code).** Create a manual collection type right from the app, with your own
  fields, formats, icon and colors. No restart, no coding required.
  See the [Plugin editor guide](https://github.com/Kyonew/DVinyl/wiki) on the Wiki.
- **Code plugin (with API).** Drop a `plugins/<id>/` folder that exports a plugin definition to add
  a full media type with its own external API, importers and stats.
  See the [Plugin development guide](https://github.com/Kyonew/DVinyl/blob/main/docs/plugin-development.md).
  Built one you are proud of? Do not hesitate to open a PR, I would genuinely love to see it! 🙌

## Documentation

| Guide | What is inside |
| :---- | :------------- |
| [Getting started](https://github.com/Kyonew/DVinyl/blob/main/docs/getting-started.md) | Installation options and requirements |
| [API keys](https://github.com/Kyonew/DVinyl/blob/main/docs/api-keys.md) | Get your Discogs, Hardcover, TMDB, IGDB, ScreenScraper, Rebrickable and BoardGameGeek keys |
| [Public share links](https://github.com/Kyonew/DVinyl/blob/main/docs/sharing.md) | Let anyone browse a collection (or part of it) read-only, no account needed |
| [Wiki](https://github.com/Kyonew/DVinyl/wiki) | User guides and no-code tutorials |

## 🔑 API Configuration

DVinyl uses external services to fetch metadata, cover art and, for music, market values. You only
need the keys for the media types you actually plan to use, and **every key is free**.

| Media type | Service | Environment variable | Needed if you collect |
| :--------- | :------ | :------------------- | :-------------------- |
| Music | Discogs | `DISCOGS_TOKEN` | Vinyls, CDs, cassettes |
| Books | Hardcover | `HARDCOVER_API_KEY` | Books, manga, comics |
| Movies | TMDB | `TMDB_API_KEY` | Blu-ray, 4K, DVD, VHS |
| Games | IGDB (Twitch) | `TWITCH_CLIENT_ID`, `TWITCH_CLIENT_SECRET` | Video games |
| LEGO | Rebrickable | `REBRICKABLE_API_KEY` | LEGO sets |
| Board games | BoardGameGeek | `BGG_API_KEY` | Board games |

Add the keys you need in the install form or to your `.env` file. Any media type whose key is missing simply stays disabled
in the admin panel until you provide it.

A media type can look things up in more than one service, and it is usable as soon as **one** of
them is configured. The admin panel lists them per module, behind the ⚙ button: each line says what
the service answers (search, images, or both) and which variable it is still waiting for. Some are
picture-only and need no key at all, so cover art keeps working on an instance that configured
nothing: Open Library for books, iTunes for music and games. Games also uses TMDB for extra artwork
if `TMDB_API_KEY` happens to be set, and quietly skips it otherwise.

## 🎵 Discogs (Music)

Used for album metadata, tracklists and market value.

1. Log in to [Discogs.com](https://www.discogs.com/).
2. Go to **Settings > Developers**.
3. Click **Generate new token**.
4. Copy the token into your `.env` as `DISCOGS_TOKEN`.

## 📚 Hardcover (Books)

Used for book metadata and covers.

1. Create an account on the [Hardcover website](https://hardcover.app/).
2. Open the [API section](https://hardcover.app/account/api)
3. Click **+ New API Key**
4. Choose a name (e.g. *DVinyl*) and expiration date
5. Use *Start from preset* and select *E-reader/Sync client*
6. Click **Create Key**
7. Copy your **token**
8. Paste it into your `.env` as `HARDCOVER_API_KEY`.

## 📀 TMDB (Movies)

Used for movie metadata and posters.

1. Create an account on [The Movie Database](https://www.themoviedb.org/).
2. Find your API key (not the "token") on [this page](https://www.themoviedb.org/settings/api).
3. Paste it into your `.env` as `TMDB_API_KEY`.

## 🎮 IGDB (Games)

Used for video game metadata and covers. IGDB is powered by Twitch, so you create the credentials in
the Twitch developer console.

1. Go to the [Twitch Developer Console](https://dev.twitch.tv/console/apps) and log in (2FA
   required).
2. Click **Register Your Application**.
3. Name it "DVinyl", set the OAuth Redirect URL to `https://localhost`, and set the category to
   **Application Integration**.
4. Once created, copy the **Client ID**.
5. Click **New Secret** to generate a **Client Secret**.
6. Paste both into your `.env` as `TWITCH_CLIENT_ID` and `TWITCH_CLIENT_SECRET`.

## 🧱 Rebrickable (LEGO)

Used for LEGO set metadata, themes, piece counts and covers.

1. Create a free account on [Rebrickable](https://rebrickable.com/).
2. Open the [API settings page](https://rebrickable.com/api/) and copy your **API key** (generate
   one if you do not have it yet).
3. Paste it into your `.env` as `REBRICKABLE_API_KEY`.

## 🎲 BoardGameGeek (Board games)

Used for board game metadata, designers, publishers and covers. Since July 2025 BGG requires a
registered application token for every XML API request (unauthenticated calls now fail with 401).

1. Read [Using the XML API](https://boardgamegeek.com/using_the_xml_api) and the
   [registration thread](https://boardgamegeek.com/thread/3525319/registration-to-use-the-xml-api-and-obtain-soon-to)
   for BGG's current registration process.
2. Register your application and obtain an application token.
   > [!NOTE]
   > BGG approves these by hand, so it can take up to 7 days to get your token. Apply before you
   > need it.
3. Paste it into your `.env` as `BGG_API_KEY`.
