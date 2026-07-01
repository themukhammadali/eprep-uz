# eprep.uz

Free, Bluebook-style exam prep for Uzbekistan university entrance exams.

It started as a personal study tool for the New Uzbekistan University (NewUU)
entrance exam — built, used, and it worked. It's now growing into eprep.uz: a
multi-exam prep platform, with **NewUU Mathematics** live today and **WIUT** and
**DTM** tracks on the way.

The site has three parts: a public **landing page** (`index.html`), an
**onboarding / sign-up flow** (`signup.html`), and the **study app** (`app.html`)
behind the "Open app" button.

## Features

- **Landing page** — fast, dependency-free front door with an interactive sample
  question, feature showcase, and topic list.
- **Accounts** — multi-step sign-up (name → exam track → email/password → 6-digit
  email verification) plus sign-in, backed by Supabase.
- **Dashboard (Home)** — greeting, live stat cards (topics completed, questions
  attempted, correct, wrong, accuracy).
- **Analytics** — daily activity chart (attempted / correct / wrong / saved) over
  the last 30 days.
- **Question Bank** — Bluebook-style question runner: one question at a time, four
  lettered choices, a per-question timer, Previous/Next, and an Explanation toggle
  for the worked solution.
- **Lessons** — explanation + quick review for each skill, with LaTeX rendered via
  MathJax.
- **Saved & Mistakes Log** — bookmark questions to revisit later, and auto-track
  wrong answers for targeted re-practice.
- **Spaced-repetition review** — mastered skills resurface on a 1/2/4/7/15/30-day
  schedule.
- **Unit Challenge** — each unit's hardest questions combined into one test at the
  end of the unit.
- **Final Challenge** — a full 120-minute, timed, auto-submitting mock exam.
- **Persistence** — all answers, accuracy, completion, and review dates are stored
  in `localStorage`; the dashboard updates live. Optional cloud sync, see below.

## Exam tracks

- **NewUU** — Mathematics. Live now: 6 units, 34 skills, 270+ questions. English and
  Uzbek.
- **WIUT** — coming soon.
- **DTM** — coming soon.

## Units (NewUU Mathematics)

1. Probability & Statistics
2. Polynomials
3. Geometry
4. Functions
5. Series, Powers, Roots
6. Logical Thinking

## Running it

It's a static site — no build step. Serve the folder (so the relative
`course-data.js` load works cleanly) and open the landing page:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000  (landing → "Open app" goes to /app.html)
```

## Accounts & cloud sync (optional)

By default progress is saved per-browser in `localStorage` — no accounts, nothing
to set up. To let students create accounts and sync progress across devices, plug in
a free [Supabase](https://supabase.com) project:

1. Create a project, then open **SQL Editor** and run `scripts/supabase-schema.sql`
   (creates a `progress` table locked down with Row-Level Security).
2. In **Project Settings → API**, copy the **Project URL** and the **anon/public**
   key.
3. Paste both into `supabase-config.js`.

Reload the app and **Sign up** / **Sign in** appear in the header. Sign-up walks
through name → exam track → email + password → a 6-digit email verification code.
On login the app merges local and cloud progress (most recent answer per question
wins) and keeps them in sync from then on, and the dashboard greets you by name.
Leave the config empty to stay local-only — the anon key is safe to ship in a
static site since RLS ensures each user can only read/write their own row.

## Structure

- `index.html` — the public landing page (self-contained: own styling + sample-question demo).
- `signup.html` — the multi-step sign-up / sign-in flow.
- `app.html` — the study app (UI, styling, and logic), including the auth + sync layer.
- `course-data.js` — all course content: explanations, reviews, and questions.
- `supabase-config.js` — your Supabase URL + anon key (empty = local-only).
- `scripts/supabase-schema.sql` — one-time database setup for cloud sync.

Edit the explanation/review/question text directly in `course-data.js`. Interface
strings live inline in `index.html` / `app.html` / `signup.html`, in English (`en`)
and Uzbek (`uz`) translation tables.
