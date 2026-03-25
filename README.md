# 🏗️ GetHouseDone

**AI-Enhanced Construction Cost Estimator**

GetHouseDone is a full-stack web application that helps users estimate the cost of building a house based on land size, number of floors, and location. It provides a detailed material-wise breakdown along with intelligent explanations to help users understand construction expenses.

---

## 🚀 Features

- 📐 Estimate construction cost based on area and floors
- 🏙️ Location-based pricing (Metro, Tier-2, Rural)
- 🧱 Detailed material breakdown (cement, steel, labor, etc.)
- 🧠 AI-ready explanation layer (currently rule-based, easily extendable to GPT)
- 📊 Historical estimates tracking
- ⚡ Fast and scalable API using Django REST Framework
- 🎯 Clean and modular backend architecture

---

## 🏗️ Tech Stack

### 🔹 Backend
- Django
- Django REST Framework
- PostgreSQL
- Python

### 🔹 Frontend
- React (Vite)
- Axios

### 🔹 Optional / Future
- OpenAI GPT (AI explanations)
- Redis + Celery (async processing)
- Docker (containerization)

---

# 🏗️ GetHouseDone

**AI-Enhanced Construction Cost Estimator**

GetHouseDone is a full-stack web application that helps users estimate the cost of building a house based on land size, number of floors, and location. It provides a detailed material-wise breakdown along with intelligent explanations to help users understand construction expenses.

---

## 🚀 Features

- 📐 Estimate construction cost based on area and floors
- 🏙️ Location-based pricing (Metro, Tier-2, Rural)
- 🧱 Detailed material breakdown (cement, steel, labor, etc.)
- 🧠 AI-ready explanation layer (currently rule-based, easily extendable to GPT)
- 📊 Historical estimates tracking
- ⚡ Fast and scalable API using Django REST Framework
- 🎯 Clean and modular backend architecture

---

## 🏗️ Tech Stack

### 🔹 Backend
- Django
- Django REST Framework
- PostgreSQL
- Python

### 🔹 Frontend
- React (Vite)
- Axios

### 🔹 Optional / Future
- OpenAI GPT (AI explanations)
- Redis + Celery (async processing)
- Docker (containerization)

---

## 📂 Project Structure
```
GetHouseDone/
│
├── backend/
│   ├── apps/
│   │   └── estimates/
│   │       ├── models.py
│   │       ├── views.py
│   │       ├── serializers.py
│   │       └── services/
│   │           ├── cost_engine.py
│   │           └── manual_explanation.py
│   │
│   ├── config/
│   └── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api/
│   │
│   └── package.json
│
├── .env.example
└── README.md
```

---
## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/GetHouseDone.git
cd GetHouseDone
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
# source venv/bin/activate  # Mac/Linux

pip install -r requirements.txt
```

### 3. Configure Environment Variables

Create a `.env` file inside `backend/`:

```env
SECRET_KEY=your_secret_key
DATABASE_NAME=construction_db
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_HOST=localhost
DATABASE_PORT=5432
OPENAI_API_KEY=your_key (optional)
```

### 4. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Start Backend Server

```bash
python manage.py runserver
```

Backend runs on: http://127.0.0.1:8000

### 6. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

---

## 🔌 API Endpoints

### Create Estimate
```
POST /api/v1/estimates/create/
```

### Get All Estimates
```
GET /api/v1/estimates/
```

### Get Estimate Detail
```
GET /api/v1/estimates/{id}/
```

---

## 📊 Sample Request

```json
{
  "area": 2000,
  "unit": "sqft",
  "floors": 2,
  "location_type": "metro"
}
```

---

## 🧠 Architecture Overview

The system follows a modular service-based architecture:

- **Cost Engine** → Handles deterministic cost calculations
- **Explanation Layer** → Provides human-readable explanation (AI/manual)
- **API Layer** → Handles request/response flow
- **Database Layer** → Stores estimates and history

This design allows easy integration of AI models without affecting core business logic.

---

## 🔐 Security Practices

- Sensitive data stored in `.env`
- `.gitignore` prevents secrets from being committed
- No hardcoded credentials
- CORS configured safely

---

## 🚀 Future Improvements

- 🤖 GPT-based intelligent explanations
- 📄 PDF export for reports
- 🔄 Async processing using Celery
- 🔐 User authentication (JWT)
- 📈 Analytics dashboard
- 🐳 Docker deployment


---
## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/GetHouseDone.git
cd GetHouseDone
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
# source venv/bin/activate  # Mac/Linux

pip install -r requirements.txt
```

### 3. Configure Environment Variables

Create a `.env` file inside `backend/`:

```env
SECRET_KEY=your_secret_key
DATABASE_NAME=construction_db
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_HOST=localhost
DATABASE_PORT=5432
OPENAI_API_KEY=your_key (optional)
```

### 4. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Start Backend Server

```bash
python manage.py runserver
```

Backend runs on: http://127.0.0.1:8000

### 6. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

---

## 🔌 API Endpoints

### Create Estimate
```
POST /api/v1/estimates/create/
```

### Get All Estimates
```
GET /api/v1/estimates/
```

### Get Estimate Detail
```
GET /api/v1/estimates/{id}/
```

---

## 📊 Sample Request

```json
{
  "area": 2000,
  "unit": "sqft",
  "floors": 2,
  "location_type": "metro"
}
```

---

## 🧠 Architecture Overview

The system follows a modular service-based architecture:

- **Cost Engine** → Handles deterministic cost calculations
- **Explanation Layer** → Provides human-readable explanation (AI/manual)
- **API Layer** → Handles request/response flow
- **Database Layer** → Stores estimates and history

This design allows easy integration of AI models without affecting core business logic.

---

## 🔐 Security Practices

- Sensitive data stored in `.env`
- `.gitignore` prevents secrets from being committed
- No hardcoded credentials
- CORS configured safely

---

## 🚀 Future Improvements

- 🤖 GPT-based intelligent explanations
- 📄 PDF export for reports
- 🔄 Async processing using Celery
- 🔐 User authentication (JWT)
- 📈 Analytics dashboard
- 🐳 Docker deployment
