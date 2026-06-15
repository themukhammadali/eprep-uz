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

## Structure

- `index.html` — the whole app (UI, styling, and logic).
- `course-data.js` — all course content: explanations, reviews, and questions.

Edit the explanation/review/question text directly in `course-data.js`.
