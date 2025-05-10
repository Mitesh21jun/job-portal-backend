
# Job Portal Backend

This is the backend for a simple job matching platform that connects employers and candidates using skill-based matching.

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- ES6 Modules

## 📦 Features

- Signup/Login for candidates and employers
- Candidate profile creation and resume submission
- Employer job posting
- Basic keyword-based job-candidate matching
- RESTful APIs with token-based authorization

## 📂 Folder Structure

```
job-matching-backend/
├── controllers/       # Logic for auth, candidate, employer, matching
├── models/            # Mongoose schemas (User, Candidate, Job)
├── routes/            # Route definitions
├── .env               # Environment variables
├── index.js           # Main server file
└── package.json
```

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
PORT=5000
```

## 🚀 Getting Started

1. Clone the repo
2. Run `npm install`
3. Set up your `.env`
4. Start the server:

```bash
npm start
```

## 🔐 Authentication

Use JWT tokens returned from `/api/auth/login` in the `Authorization` header as:

```
Authorization: Bearer <token>
```

## 🔁 API Endpoints

### Auth
- `POST /api/auth/signup` - Register new user (role: candidate/employer)
- `POST /api/auth/login` - Login and get JWT

### Candidate
- `POST /api/candidate/profile` - Create/Update candidate profile
- `GET /api/candidate/:id` - Get candidate profile

### Employer
- `POST /api/employer/post-job` - Post a new job
- `GET /api/employer/:userId/jobs` - Get all jobs posted by employer

### Match
- `GET /api/match/job-to-candidates/:jobId` - Match job to candidates
- `GET /api/match/candidate-to-jobs/:candidateId` - Match candidate to jobs

## 📫 Postman Collection

Import the included Postman collection to test endpoints. Set the `base_url` variable to your running backend (e.g., http://localhost:5000).

## 📄 License

This project is for demonstration purposes under a 24-hour hackathon challenge.
