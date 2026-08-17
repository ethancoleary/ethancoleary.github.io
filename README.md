# ethancoleary.github.io

Personal academic website, replicated from the structure and content of ethan-oleary.com.

## Structure
- `index.html` — Home page (bio, job market paper summary, conference list)
- `research.html` — Research page (job market paper, working papers, works in progress, with click-to-expand abstracts)
- `style.css` — Shared styling for both pages
- `script.js` — Handles the click-to-expand abstract toggles on the Research page

## Deploying with GitHub Pages
1. Push these five files to the root of the `ethancoleary.github.io` repository, on the `main` branch.
2. On GitHub, go to your repo → **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main**, folder to **/(root)**.
4. Click **Save**. Your site will be live at `https://ethancoleary.github.io` within a minute or two.

## Editing content later
All text lives directly in `index.html` and `research.html` as plain HTML — open either file in any text editor, edit the text between the tags, save, and push/commit. No build step or dependencies required.
