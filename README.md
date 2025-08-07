# 🧩 Django Web Project

A responsive and animated web application built using **Django**. This project includes scroll-based animations, parallax effects, and mobile-first design, offering a modern and interactive user experience.

---

## 🚀 Features

- ✨ **Modern UI** with interactive animations  
- 📱 **Mobile Responsive** across all screen sizes  
- 🎯 **Scroll-Based Animations** using GSAP & ScrollMagic  
- 🌌 **Parallax Effects** for smooth background movement  
- 🧰 Built with **Django, HTML5, CSS3, JavaScript**  
- 🔐 **Secure Static File Handling**

---

## 🖼️ Screenshots

<img width="1882" height="882" alt="image" src="https://github.com/user-attachments/assets/dc9abfa4-90d9-4d08-aa63-2d024722932e" />


---

## 🛠️ Tech Stack

| Layer          | Tools Used                        |
|----------------|-----------------------------------|
| Backend        | Python 3.10+, Django 4.x          |
| Frontend       | HTML5, CSS3, JavaScript (Vanilla, GSAP, ScrollMagic) |
| Version Control| Git, GitHub                       |
| Deployment     | Render / Railway / Heroku (optional) |

---

## 📦 Setup Instructions

### 🔁 Clone the Repository
```bash
git clone https://github.com/karthikj30/Django_web.git
cd Django_web
```

### 🧪 Create Virtual Environment
```bash
python -m venv venv

# Activate:
# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate
```

### 📥 Install Dependencies
```bash
pip install -r requirements.txt
```

### ⚙️ Apply Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### ▶️ Run the Server
```bash
python manage.py runserver
```

Open your browser and go to:
```
http://127.0.0.1:8000/
```

---

## 🌍 Deployment

To prepare for deployment:
```bash
python manage.py collectstatic
```

### For Platforms Like Heroku / Render / Railway:
- Add a `Procfile`
- Ensure `requirements.txt` and `runtime.txt` exist
- Configure `ALLOWED_HOSTS` and `STATIC_ROOT` in `settings.py`

---

## 🙏 Acknowledgements

- [Django Documentation](https://docs.djangoproject.com/)
- [ScrollMagic](https://scrollmagic.io/)
- [GSAP (GreenSock)](https://greensock.com/)
- [Font Awesome](https://fontawesome.com/) (optional icons)

---

## 👨‍💻 Author

**Karthik Janardhan**
- 🔗 GitHub: [@karthikj30](https://github.com/karthikj30)
- 📧 Email: karthik@example.com *(replace with your actual email)*

---

💡 **Feel free to fork, contribute or star this project if you find it useful!**

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

If you encounter any issues or have suggestions, please [create an issue](https://github.com/karthikj30/Django_web/issues) on GitHub.
