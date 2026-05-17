# Fresh GitHub + Cloudflare Pages Deployment Checklist

1. Push this whole `Tech` folder to GitHub.
2. In Cloudflare Pages, connect the GitHub repository.
3. Build command: leave empty. Output folder: `/` or the folder Cloudflare detects for this static app.
4. Bind your D1 database as `DB`.
5. Run migrations in this order:

```bash
wrangler d1 execute YOUR_DATABASE_NAME --file=cloudflare/schema.sql
wrangler d1 execute YOUR_DATABASE_NAME --file=cloudflare/upgrade_profile.sql
wrangler d1 execute YOUR_DATABASE_NAME --file=cloudflare/upgrade_recommendations.sql
wrangler d1 execute YOUR_DATABASE_NAME --file=cloudflare/upgrade_monster_gradeup.sql
wrangler d1 execute YOUR_DATABASE_NAME --file=cloudflare/upgrade_final_avatar_diagrams.sql
```

6. Set secrets in Cloudflare Pages:

```bash
wrangler pages secret put ADMIN_USERNAME
wrangler pages secret put ADMIN_PASSWORD
wrangler pages secret put ADMIN_DISPLAY_NAME
```

7. Redeploy Pages.

Final behavior:
- Avatar 1 is default.
- Each successful quiz unlocks the next avatar, one at a time.
- Upload photo unlocks at Level 10 or 95% best score.
- Uploaded photo becomes a selectable avatar called `My Photo`.
- Students can delete the uploaded photo.
- Admin can delete teacher accounts.
- Admin/teacher can upload diagrams while creating or editing questions.
- Teachers can edit or delete questions in their assigned subject.
