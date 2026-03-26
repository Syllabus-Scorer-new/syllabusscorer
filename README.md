# syllabusscorer

## Deploy to Vercel

### Option A: Vercel dashboard (easiest)

- Push this repo to GitHub
- In Vercel: **New Project** → import the repo
- **Framework Preset**: Other
- **Build Command**: leave blank
- **Output Directory**: leave blank
- Deploy

### Option B: Vercel CLI

Install and deploy:

```bash
npm i -g vercel
vercel login
vercel
```

When prompted, choose:
- Link to existing project? **No** (first time)
- Build settings: **No build command** / static

## Supabase setup (Auth + profiles)

### 1) Add your Supabase keys

Edit `supabaseConfig.js` and paste:
- **Project URL**
- **anon public key**

Both are in Supabase: Settings → API.

Important: **Never** put your Supabase **service role key** into this repo or Vercel.

### 2) Create `profiles` table

Run this in Supabase SQL editor:

```sql
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles_select_own"
on public.profiles for select
using (auth.uid() = id);

create policy "profiles_upsert_own"
on public.profiles for insert
with check (auth.uid() = id);

create policy "profiles_update_own"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);
```

### 3) Auth settings

In Supabase Auth settings, make sure **Email/Password** is enabled.
If **email confirmations** are enabled, users may need to confirm their email before they can sign in.