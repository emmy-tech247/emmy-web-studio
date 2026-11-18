# Emmy Web Studio – Next.js site

A one-page agency website built with Next.js (App Router) and TypeScript.

## Change your details
Open `site.config.ts`. Name, phone number, email, prices, projects and text all live there.

## Run it on your computer
Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy on Vercel
1. Create a GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/emmy-web-studio.git
   git push -u origin main
   ```
2. Go to vercel.com, choose **Add New → Project**, import the repository and click **Deploy**. No settings need changing.

## Connect your own domain
1. Buy a domain from a registrar (for example a .com, .ng or .com.ng address).
2. In Vercel, open your project → **Settings → Domains** → add your domain, e.g. `yourname.com.ng`.
3. Vercel shows the DNS records to add. In your registrar’s DNS settings, add exactly the records Vercel displays (usually an **A** record for the root domain and a **CNAME** record for `www`). Do not copy values from elsewhere, because Vercel can update them.
4. Wait for DNS to update (minutes to a few hours). Vercel then issues the HTTPS certificate automatically.

## Add a contact form later
The page uses WhatsApp and email buttons, which need no server. If you want a form, add a route handler in `app/api/contact/route.ts` and send the messages with an email service such as Resend.
