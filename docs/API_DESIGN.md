# 🌐 OpenMind AI - API Design

---

# 📖 API Overview

OpenMind AI follows a RESTful API architecture.

The frontend communicates with the backend through secure HTTP APIs.

---

# 🔐 Authentication APIs

POST   /api/auth/register

POST   /api/auth/login

POST   /api/auth/logout

GET    /api/auth/profile

PUT    /api/auth/profile

---

# 💬 Chat APIs

POST   /api/chat

GET    /api/chat/history

DELETE /api/chat/:id

PUT    /api/chat/:id

---

# 🎨 Image APIs

POST   /api/image/generate

POST   /api/image/edit

GET    /api/image/history

---

# 📄 Document APIs

POST   /api/document/upload

POST   /api/document/chat

GET    /api/document/history

---

# 🤖 AI Agent APIs

POST   /api/agent/run

GET    /api/agent/history

---

# 👤 User APIs

GET    /api/user/profile

PUT    /api/user/profile

DELETE /api/user/account

---

Version: 0.1

Status: Planning