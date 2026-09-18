# Tech Monster Cloudflare Setup

This upgraded version is Cloudflare-ready and moves the important admin/teacher controls away from browser JavaScript.

## What is included

- One shared login screen for admin, teacher, and student accounts.
- Students login with username + password only. New student accounts are created automatically.
- Admin password is no longer written inside frontend JavaScript.
- Admin and teacher sessions are checked by Cloudflare Pages Functions.
- Admin can add/delete subjects.
- Admin can add/delete teachers and assign subjects.
- Teachers can add/edit/delete only the questions and notes for their assigned subject.
- Admin can add/edit/delete questions and notes for all subjects.
- Students choose which subject to take quiz with.
- Notes also use subject selection.
- App behavior settings are stored in D1.
- Profile photo upload is controlled and compressed before saving.
- Students can delete uploaded profile photos.
- Dark theme has been added as an unlockable theme.
- Hall of Fame top 3 now show larger controlled avatar/photo display.
- Admin can approve certificates per student and subject.
- Offline/local fallback still exists for student testing, but staff/admin work is intended for Cloudflare D1.

## Deploy steps

1. Upload this folder to GitHub.
2. Go to Cloudflare Dashboard > Workers & Pages > Create Pages project.
3. Connect your GitHub repo.
4. Set build command to blank.
5. Set output directory to `/` or `.`.
6. Create a D1 database named `tech_monster_db`.
7. Run the SQL inside `cloudflare/schema.sql` in your D1 database.
8. In Pages project settings, add a D1 binding:
   - Binding name: `DB`
   - Database: `tech_monster_db`
9. Add your admin credentials as Cloudflare environment variables or secrets:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - Optional: `ADMIN_DISPLAY_NAME`
   - Optional: `ADMIN_RECOVERY_EMAIL` (default `mendysam32@gmail.com`)
   - Optional: `EMAIL_FROM` (e.g. `Tech Monster <noreply@yourdomain.com>` — domain must be onboarded)
   - Optional: `RESEND_API_KEY` (fallback if Cloudflare Email Service not configured)
10. In Pages project settings, add the Email binding:
   - Binding name: `EMAIL` (type: Send Email) — see `wrangler.toml` `[[send_email]]`
   - Onboard your sending domain: `npx wrangler email sending enable yourdomain.com` or Dashboard > Email > Email Sending > Enable domain, then set `EMAIL_FROM` to an address on that domain.
11. Deploy again.

## Existing D1 database upgrade

If your D1 database was created before this upgrade, run:

```bash
wrangler d1 execute tech_monster_db --file=cloudflare/upgrade_recommendations.sql
```

If D1 says the `username` column already exists, ignore that line and run the remaining CREATE TABLE statements from the SQL file.

## Admin login

Use the same login page as everyone else.

The admin username and password must be set in Cloudflare, not inside the app files. This prevents the password from being visible in browser developer tools.

Example secret setup:

```bash
wrangler pages secret put ADMIN_USERNAME
wrangler pages secret put ADMIN_PASSWORD
wrangler pages secret put ADMIN_DISPLAY_NAME
wrangler pages secret put ADMIN_RECOVERY_EMAIL   # default mendysam32@gmail.com
wrangler pages secret put EMAIL_FROM             # e.g. Tech Monster <noreply@yourdomain.com>
```

### Forgot password? Recover via email / login with email

- On the login page, switch to **Admin Login** → tap **"Forgot login? Recover via email"**.
- Enter `mendysam32@gmail.com` (or your custom `ADMIN_RECOVERY_EMAIL`) and tap **Send recovery email**.
- You will receive an email containing:
  - Your current admin **username**
  - Your **recovery email** (which also works as a username alias)
  - Your **password** (plaintext from the `ADMIN_PASSWORD` secret)
  - A **one-click magic link** (valid 15 minutes, single-use) that logs you in without typing credentials.

- **Login with email:** In Admin Login, you can type `mendysam32@gmail.com` in the *Username* field with your admin password — it is treated as an alias for `ADMIN_USERNAME` (handled in `functions/api/unified-login.js:11`).

> Email delivery requires a verified sending domain. If `EMAIL` binding is not configured, the API still returns the magic link in the JSON response (useful for local dev) but warns `Email not sent — check server logs`. Configure either Cloudflare Email Service (`[[send_email]]` → `EMAIL`) or `RESEND_API_KEY`.
>
> D1 migration for magic links: `cloudflare/upgrade_admin_recovery.sql` (also merged into `cloudflare/schema.sql:131`). Run `wrangler d1 execute tech_monster_db --file=cloudflare/upgrade_admin_recovery.sql` on existing DBs.

## Local testing note

Opening the HTML files directly still allows student fallback testing with localStorage, but admin/teacher cloud management requires Cloudflare Pages Functions and D1.
