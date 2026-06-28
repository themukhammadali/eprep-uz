# NewUU Entrance Prep — Mathematics

A clean, light, Bluebook-style web app for practising the mathematics topics on the
New Uzbekistan University (NewUU) entrance exam. Dashboard-first, with per-skill
progress tracking, practice and challenge questions, worked solutions, and
spaced-repetition review — all saved locally in the browser.

## Features

- **Dashboard** — greeting, live stat cards (topics completed, questions attempted,
  correct, wrong, accuracy), and a unit-grouped **topic tracker** with progress bars
  and accuracy dots.
- **Due for review** — spaced-repetition surfaces skills when they're due.
- **Topic screen** — explanation + quick review for each skill, with LaTeX rendered
  via MathJax.
- **Bluebook-style question runner** — one question at a time, four lettered choices,
  a per-question timer, Previous/Next, and an Explanation toggle for the worked solution.
- **Unit Challenge** — each unit's hard questions combined into one test at the end of
  the unit.
- **Persistence** — all answers, accuracy, completion, and review dates are stored in
  `localStorage`; the dashboard updates live.

## Units

1. Probability & Statistics
2. Polynomials
3. Geometry
4. Functions
5. Series, Powers, Roots
6. Logical Thinking

## Running it

It's a static site — no build step. Either open `index.html` directly, or serve the
folder (so the relative `course-data.js` load works cleanly):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Cloud sync (optional)

By default progress is saved per-browser in `localStorage` — no accounts, nothing
to set up. To let students sign in and sync progress across devices, plug in a free
[Supabase](https://supabase.com) project:

1. Create a project, then open **SQL Editor** and run `scripts/supabase-schema.sql`
   (creates a `progress` table locked down with Row-Level Security).
2. In **Project Settings → API**, copy the **Project URL** and the **anon/public** key.
3. Paste both into `supabase-config.js`.

Reload the app and a **Sign in** button appears in the header. Sign-in is passwordless
(magic link by email). On login the app merges local and cloud progress (most recent
answer per question wins) and keeps them in sync from then on. Leave the config empty
to stay local-only. The anon key is safe to ship in a static site — RLS ensures each
user can only read/write their own row.

## Structure

- `index.html` — the whole app (UI, styling, and logic), including the auth + sync layer.
- `course-data.js` — all course content: explanations, reviews, and questions.
- `supabase-config.js` — your Supabase URL + anon key (empty = local-only).
- `scripts/supabase-schema.sql` — one-time database setup for cloud sync.

Edit the explanation/review/question text directly in `course-data.js`.
