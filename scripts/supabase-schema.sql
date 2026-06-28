-- NewUU Prep — Supabase schema
-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor -> New query).
--
-- It creates a single `progress` table that stores each user's entire progress
-- blob ({ answers, review }) as JSONB, and locks it down with Row-Level Security
-- so every user can read/write only their own row.

create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{"answers":{},"review":{}}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

-- Each policy is scoped to the authenticated user's own row.
drop policy if exists "progress_select_own" on public.progress;
create policy "progress_select_own"
  on public.progress for select
  using (auth.uid() = user_id);

drop policy if exists "progress_insert_own" on public.progress;
create policy "progress_insert_own"
  on public.progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.progress;
create policy "progress_update_own"
  on public.progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
