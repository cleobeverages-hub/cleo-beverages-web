
Action: file_editor create /app/cleo-site/DEPLOYMENT.md --file-text "# Deployment Guide — GitHub Pages + cleobeverages.com

This site is a static HTML/CSS/JS bundle. No backend, no build step. You can deploy it in 3 ways. The recommended way is **GitHub Pages with a custom domain**, which you already own (`cleobeverages.com`).

---

## 1. Prerequisites

- A GitHub account
- The domain **cleobeverages.com** (registered via your DNS provider — Hostinger / GoDaddy / Cloudflare / etc.)
- This `cleo-site/` folder on your local machine

---

## 2. Push the site to a GitHub repository

```bash
cd cleo-site

git init
git add .
git commit -m \"feat: CLEO Beverages premium corporate website\"
git branch -M main

# Replace <your-username> and <repo-name>
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

> Tip: name the repo `cleobeverages-website` (or anything you like — the custom domain hides it).

---

## 3. Enable GitHub Pages

1. Go to **your repo → Settings → Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` · folder: `/ (root)`
4. Click **Save**
5. Wait ~30 seconds. GitHub will show a green badge: *Your site is live at https://&lt;you&gt;.github.io/&lt;repo&gt;/*

---

## 4. Connect your custom domain (cleobeverages.com)

The repo already contains a `CNAME` file with `cleobeverages.com`.

### a) In **GitHub → Settings → Pages → Custom domain**
- Enter `cleobeverages.com` and click **Save**.
- Tick **Enforce HTTPS** once it becomes available (a few minutes after DNS propagation).

### b) In your **DNS provider** dashboard, add these records:

**Apex (root) — `cleobeverages.com`**

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**`www` subdomain (recommended)**

| Type | Name | Value |
|---|---|---|
| CNAME | www | `<your-username>.github.io` |

DNS usually propagates in 15 min – 2 hrs. Then `https://cleobeverages.com` will load this site with a free SSL certificate from GitHub.

---

## 5. Update content before launch

Open `index.html` and `js/main.js` and replace every `{{TOKEN}}`:

- `{{PHONE}}` → contact number
- `{{EMAIL}}` → contact email
- `{{WHATSAPP}}` → WhatsApp number in international format **without `+`** (e.g. `919876543210`)
- `{{FACTORY_ADDRESS}}` → full address
- `{{FSSAI_NO}}` → FSSAI licence number
- `{{CAPACITY}}` → daily production capacity
- `{{NAME}}`, `{{HOTEL · CITY}}`, `{{DISTRIBUTOR · REGION}}`, `{{INSTITUTION}}` → real testimonials

Then drop images into `assets/images/` using the filenames documented in `assets/images/README.md`.

Commit and push — GitHub Pages will auto-rebuild within ~30 seconds.

```bash
git add .
git commit -m \"content: real business details + images\"
git push
```

---

## 6. Optional: Embed Google Maps

In `index.html`, find this block:

```html
<!-- To enable, uncomment and paste your embed: ... -->
```

1. Open [Google Maps](https://maps.google.com), search your factory address.
2. Click **Share → Embed a map → COPY HTML**.
3. Paste the `<iframe ...>` tag inside the `.contact__map` div (replacing the placeholder block).

---

## 7. Optional: Form submissions to your inbox

The contact form currently opens the visitor's default mail app via `mailto:`. For real submissions while staying on GitHub Pages, plug in any of:

- **Formspree** (https://formspree.io) — change form `action` to your endpoint
- **Getform** (https://getform.io)
- **Web3Forms** (https://web3forms.com) — free, no signup beyond access key

All three work with the existing form HTML — just set `action` and `method=\"POST\"` on the `<form>` tag and delete the `submit` handler in `js/main.js` if you want a full hand-off to them.

---

## 8. Alternative hosts (if not GitHub Pages)

This is just a folder of static files — so it works on:

- **Cloudflare Pages** (drag & drop `cleo-site` folder)
- **Netlify** (drag & drop)
- **Vercel** (`vercel --prod` from this folder)
- Any Apache / Nginx web server (`/var/www/html/`)

No changes needed.

---

## Need help?

If anything breaks, check:

1. `Settings → Pages` shows a green “published” badge
2. DNS records match exactly (no trailing dots, no extra spaces)
3. `CNAME` file at the repo root contains **only** `cleobeverages.com`
4. Browser cache cleared (hard reload `Ctrl/⌘ + Shift + R`)

Done. Welcome online.
"
Observation: Create successful: /app/cleo-site/DEPLOYMENT.md
