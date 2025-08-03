# Fandom Directory – Microfrontend Architecture

This repository implements a microfrontend architecture using **Module Federation** with **Vite**. It consists of one host application and two remote microfrontends.

## Project Structure

```text
fandom-directory/
├── fandom-directory    # Host application
├── harry-potter-mf     # Remote microfrontend: Harry Potter
└── pokemon-mf          # Remote microfrontend: Pokémon
```

## Requirements

- Node.js >= 16
- npm or yarn
- Modern browser

## Installation

Each project must be installed independently. Use `npm install` or `yarn` inside each subproject:

```bash
cd harry-potter-mf && npm install
cd ../pokemon-mf && npm install
cd ../fandom-directory && npm install
```

## Running Projects

### Run projects independently (isolated dev mode)

You can run any microfrontend or the host application individually:

**Harry Potter Microfrontend:**

```bash
cd harry-potter-mf
npm run dev
```

**Pokémon Microfrontend:**

```bash
cd pokemon-mf
npm run dev
```

**Host Application:**

```bash
cd fandom-directory
npm run dev
```

### Run the full system (host + remotes)

To run the host application (`fandom-directory`) with both microfrontends running:

1. **Build and preview each remote:**

   **Harry Potter:**

   ```bash
   cd harry-potter-mf
   npm run build
   npm run preview
   ```

   **Pokémon:**

   ```bash
   cd pokemon-mf
   npm run build
   npm run preview
   ```

   > **Note:** `npm run preview` serves the built remotes on localhost (usually on port 4173), which is required for Module Federation to work at runtime.

2. **Start the host app:**
   ```bash
   cd fandom-directory
   npm run dev
   ```

The host will load remote components from the preview servers of `harry-potter-mf` and `pokemon-mf`.

## Important Notes

- Ensure that the `remoteEntry.js` URLs in the host are pointing to the correct ports (e.g., `http://localhost:4173/assets/remoteEntry.js`).
- If a remote is not running or misconfigured, the host will fail to load the module at runtime.
- Each microfrontend should be built and served in preview mode before starting the host application for the full system to work properly.

## Troubleshooting

- **Port conflicts:** If ports are already in use, Vite will automatically assign different ports. Make sure to update the URLs in your Module Federation configuration.
- **CORS issues:** Ensure all services are running on localhost to avoid cross-origin restrictions.
- **Module loading errors:** Check that all remotes are properly built and their preview servers are running before starting the host.
