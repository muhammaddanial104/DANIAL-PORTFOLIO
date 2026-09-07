# Muhammad Danial — Portfolio

> Full Stack Developer | AI Agent Developer | Python Developer  
> BS Robotics @ Bahria University · Gujrat, Pakistan

---

## Tech Stack
- **Frontend**: React 18 + Vite + Three.js (animated bg)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Styling**: Custom CSS (Dark Purple Futuristic Theme)

---

## ?? Quick Start (Local Dev)

### 1. Clone & Install
```bash
git clone <repo-url>
cd mern-portfolio
npm run install-all
```

### 2. Setup Environment
```bash
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI
```

### 3. Seed Database (optional)
```bash
npm run seed
```

### 4. Run Dev Server
```bash
npm run dev
```
- Frontend: http://localhost:5173
- Backend:  http://localhost:5000

---

## ?? Deploy

### Frontend ? Vercel
1. Push to GitHub
2. Import repo on vercel.com
3. Root: `client/`, Build: `npm run build`, Output: `dist`
4. Set env: `VITE_API_URL=https://your-backend.onrender.com`

### Backend ? Render
1. New Web Service ? connect GitHub
2. Root: `server/`
3. Build command: `npm install`
4. Start command: `node index.js`
5. Set env vars: `MONGODB_URI`, `CLIENT_URL`, `NODE_ENV=production`

### Database ? MongoDB Atlas
1. Create free cluster at mongodb.com/atlas
2. Copy connection string to `MONGODB_URI`

---

## ?? Structure
```
mern-portfolio/
+-- client/        React + Vite frontend
+-- server/        Express + MongoDB backend
+-- package.json   Root scripts (concurrently)
```

---

**Contact**: innocentdanial00@gmail.com
