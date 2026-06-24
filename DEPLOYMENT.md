# Deployment Guide

This project is **4 deployables**: one Express/MongoDB backend + three React (Vite) apps.
Recommended setup: **backend on Render** (it writes uploaded images to disk), **the 3 React apps on Vercel**.

```
login-register  (Vercel)  ─┐
frontend (user) (Vercel)  ─┼──>  backend (Render)  ──>  MongoDB Atlas
admin_frontend  (Vercel)  ─┘
```

All URLs are now configurable via environment variables (no more hardcoded `localhost`).

---

## 1. MongoDB Atlas (free tier)
1. Create an account at https://www.mongodb.com/atlas and a free **M0** cluster.
2. Add a database user (username + password).
3. Network Access → allow `0.0.0.0/0` (or Render's IPs).
4. Copy the connection string, e.g.
   `mongodb+srv://USER:PASS@cluster0.xxxxx.mongodb.net/lms?retryWrites=true&w=majority`

## 2. Backend on Render (free web service)
1. Push this repo to GitHub.
2. Render → **New → Web Service** → pick the repo.
3. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. **Environment variables** (see `backend/.env.example`):
   - `MONGODB_URL` = your Atlas string
   - `EMAIL` = your Gmail address
   - `PASSWORD` = your Gmail **app password** (not your normal password)
   - (`PORT` is provided by Render automatically)
5. Deploy. Note the public URL, e.g. `https://lms-backend.onrender.com`.

> Note: Render's free disk is ephemeral — uploaded book cover images may be lost on
> redeploy/sleep. Fine for a demo; move to Cloudinary/S3 later if you need persistence.

## 3. The three React apps on Vercel
Create **three** Vercel projects from the same repo, one per folder. For each:
- **Root Directory:** `frontend` (then `admin_frontend`, then `login-register`)
- Framework preset: **Vite** (Build: `npm run build`, Output: `dist`)
- `vercel.json` is already included so client-side routing works on refresh.

Deploy `login-register` first (it's the entry point), then the other two so you know their URLs.

**Environment variables** for each project (see `*/.env.example`):
| Variable | Value |
|---|---|
| `VITE_API_URL` | your Render backend URL |
| `VITE_USER_URL` | the deployed **frontend** (user app) URL |
| `VITE_ADMIN_URL` | the deployed **admin_frontend** URL |
| `VITE_LOGIN_URL` | the deployed **login-register** URL |

Set all four on all three projects, then **redeploy** so the values are baked into the build.

---

## Local development
Unchanged — from the repo root:
```sh
npm run lms
```
Defaults fall back to `localhost:3000` / `5173` / `5174` / `5175`. Create a `backend/.env`
from `backend/.env.example` with your local `MONGODB_URL`, `EMAIL`, `PASSWORD`.
