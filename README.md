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

# Questions from PDF doc:

1. Accessibility means making sure your website can be used by everyone, including people with disabilities. You achieve it by following good practices like adding alt text to images, using semantic HTML tags, making sure there's enough contrast between text and background, and allowing people to navigate using just a keyboard or screen readers. It's all about making your content understandable and usable for all kinds of users.

2. sessionStorage keeps data as long as the browser tab is open. Once you close it, the data is gone. localStorage is similar but the data stays even after closing the browser. Cookies are small pieces of data that the browser can send with every request. They’re often used for things like authentication or remembering preferences.

3. JavaScript runs in a single thread, so it needs a way to handle things like API calls or timers without blocking everything. That’s where the event loop comes in. Basically, it runs all the regular code first, and then when something async (like a promise) finishes, it adds it to a queue. The event loop picks things from that queue once the main thread is free. With async/await, you’re basically telling JS: "wait for this to finish before continuing", but without blocking the whole app. It just pauses that function, not everything.

4. I usually check the dependencies of the effect and make sure it only runs when it needs to. Also, if I'm making requests based on user input (like a search or a button), I can add a debounce to make it waits a bit before sending the request. In some cases, I also use tools like react-query or swr, which handle caching and reduce repeated calls automatically.

5. It depends on the app. If it’s a small or mid-size app, I usually go with React Context — it’s simple and does the job for things like user info, theme, or language. If the app gets more complex or the state needs to be updated often and in different places, I might go with something like Redux Toolkit, Zustand, or Jotai. Lately, I’ve been avoiding classic Redux because it feels too heavy for most use cases.

6. Progressive rendering is a way to show content little by little, instead of waiting for the whole page to load. So for example, you might show the main layout or text first, and load images or other sections later. It helps make the site feel faster and more responsive for users.
