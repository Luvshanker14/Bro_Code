# Deployment Guide

This project is **2 deployables**: one Express/MongoDB backend + one React (Vite) SPA
(the former three apps — login, user, admin — are now merged into `frontend/`).
Recommended setup: **backend on Render** (it writes uploaded images to disk), **the React app on Vercel**.

```
frontend (Vercel)  ──>  backend (Render)  ──>  MongoDB Atlas
  /login  /  /admin
```

The API URL is configurable via the `VITE_API_URL` environment variable (no more hardcoded `localhost`).

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

## 3. The single React app on Vercel
The three React apps were merged into **one** Vite SPA (`frontend/`) with routes:
`/login` (login/register), `/` (user portal), `/admin` (admin portal).

Create **one** Vercel project from the repo:
- **Root Directory:** `frontend`
- Framework preset: **Vite** (Build: `npm run build`, Output: `dist`)
- `frontend/vercel.json` is already included so client-side routing works on refresh.

**Environment variable** (see `frontend/.env.example`):
| Variable | Value |
|---|---|
| `VITE_API_URL` | your Render backend URL (e.g. `https://lms-backend-gkt2.onrender.com`) |

Set it, deploy, and your whole app lives at one URL (e.g. `https://your-app.vercel.app`,
with `/login` and `/admin` under the same domain).

---

## Local development
From the repo root:
```sh
npm run lms          # runs frontend (vite) + backend (express) together
```
The frontend dev server runs on `http://localhost:5173`. The backend reads `backend/.env`
(`MONGODB_URL`, `EMAIL`, `PASSWORD`, and `PORT` — currently `4000`). The frontend falls
back to `http://localhost:4000` for the API if `VITE_API_URL` isn't set.
