i18next.init({
    lng: 'uz',
    fallbackLng: 'uz',
    resources: {
      uz: {
        translation: {
          about: "Men haqimda",
          projects: "Ishlarim",
          services: "Xizmatlar",
          blog: "Blog",
          contact: "Kontakt",
          home_title: "Jahongir Sherboboyev",
          home_subtitle: "Dasturchi | Python ishqibozi",
          about_content: `
            <img src="profile.jpg" alt="Jahongir Sherboboyev" class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover profile-img">
            <p><strong>Ism:</strong> Jahongir Sherboboyev</p>
            <p><strong>Tug‘ilgan yil:</strong> 31-dekabr 2008</p>
            <p><strong>Manzil:</strong> Samarqand viloyati, Urgut tumani, So‘fiyon mahallasi</p>
            <p><strong>Telefon:</strong> +998 97 393 43 34</p>
            <p><strong>Email:</strong> <a href="mailto:jahongirsherboboyev2@gmail.com" class="text-blue-400">jahongirsherboboyev2@gmail.com</a></p>
            <p><strong>Hobbi:</strong> PUBG o‘ynash</p>
            <p><strong>Qiziqish va o‘qish:</strong> Ingliz tili (B1), IT (Python)</p>
            <p><strong>Ijtimoiy tarmoqlar:</strong> 
              <a href="https://t.me/real_yakoy" class="text-blue-400 mx-2"><i class="fab fa-telegram-plane"></i> Telegram</a>
              <a href="https://www.instagram.com/real_yakoy/" class="text-blue-400 mx-2"><i class="fab fa-instagram"></i> Instagram</a>
            </p>
          `,
          message_sent: "Xabar yuborildi!",
          error_occurred: "Xatolik yuz berdi.",
          server_error: "Server bilan bog‘lanishda xatolik.",
          contact_methods: "Bog‘lanish usullari",
          close: "Yopish",
          name_label: "Ism",
          email_label: "Email",
          message_label: "Xabar",
          submit_button: "Yuborish",
          call_me_button: "Call Me"
        }
      },
      en: {
        translation: {
          about: "About Me",
          projects: "My Projects",
          services: "Services",
          blog: "Blog",
          contact: "Contact",
          home_title: "Jahongir Sherboboyev",
          home_subtitle: "Programmer | Python Enthusiast",
          about_content: `
            <img src="profile.jpg" alt="Jahongir Sherboboyev" class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover profile-img">
            <p><strong>Name:</strong> Jahongir Sherboboyev</p>
            <p><strong>Birth Date:</strong> December 31, 2008</p>
            <p><strong>Address:</strong> Sofiyon Neighborhood, Urgut District, Samarkand Region</p>
            <p><strong>Phone:</strong> +998 97 393 43 34</p>
            <p><strong>Email:</strong> <a href="mailto:jahongirsherboboyev2@gmail.com" class="text-blue-400">jahongirsherboboyev2@gmail.com</a></p>
            <p><strong>Hobby:</strong> Playing PUBG</p>
            <p><strong>Interests & Studies:</strong> English (B1), IT (Python)</p>
            <p><strong>Social Media:</strong> 
              <a href="https://t.me/real_yakoy" class="text-blue-400 mx-2"><i class="fab fa-telegram-plane"></i> Telegram</a>
              <a href="https://www.instagram.com/real_yakoy/" class="text-blue-400 mx-2"><i class="fab fa-instagram"></i> Instagram</a>
            </p>
          `,
          message_sent: "Message sent!",
          error_occurred: "An error occurred.",
          server_error: "Error connecting to the server.",
          contact_methods: "Contact Methods",
          close: "Close",
          name_label: "Name",
          email_label: "Email",
          message_label: "Message",
          submit_button: "Submit",
          call_me_button: "Call Me"
        }
      }
    }
  }, function(err, t) {
    if (err) {
      console.error("i18next initialization error:", err);
    } else {
      console.log("i18next initialized successfully");
      updateContent();
    }
  });
  
  // Update content based on language
  function updateContent() {
    console.log("Updating content for language:", i18next.language);
    document.querySelectorAll("nav a")[0].textContent = i18next.t('about');
    document.querySelectorAll("nav a")[1].textContent = i18next.t('projects');
    document.querySelectorAll("nav a")[2].textContent = i18next.t('services');
    document.querySelectorAll("nav a")[3].textContent = i18next.t('blog');
    document.querySelectorAll("nav a")[4].textContent = i18next.t('contact');
    document.querySelector("#home h1").textContent = i18next.t('home_title');
    document.querySelector("#home p").textContent = i18next.t('home_subtitle');
    const aboutContent = document.querySelector("#about .max-w-3xl");
    if (aboutContent) {
      aboutContent.innerHTML = i18next.t('about_content');
      aboutContent.style.opacity = "1"; // Ensure visibility
    }
    document.querySelector("#call-me-modal h3").textContent = i18next.t('contact_methods');
    document.querySelector("#close-modal").textContent = i18next.t('close');
    document.querySelector("#contact-form label[for='name']").textContent = i18next.t('name_label');
    document.querySelector("#contact-form label[for='email']").textContent = i18next.t('email_label');
    document.querySelector("#contact-form label[for='message']").textContent = i18next.t('message_label');
    document.querySelector("#contact-form button[type='submit']").textContent = i18next.t('submit_button');
    document.querySelector("#call-me").textContent = i18next.t('call_me_button');
  }
  
  // Language Switcher
  document.getElementById("language").addEventListener("change", function () {
    const selectedLang = this.value;
    if (selectedLang) {
      console.log("Language changed to:", selectedLang);
      i18next.changeLanguage(selectedLang, (err) => {
        if (err) {
          console.error("Language change error:", err);
        } else {
          updateContent();
        }
      });
    }
  });
  
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.getElementById("body");
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLightMode = body.classList.contains("light-mode");
    themeToggle.innerHTML = isLightMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  });
  
  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
  
  // GSAP Animations
  gsap.from("#home .animate-hero", { duration: 1.5, y: 100, opacity: 0, ease: "power3.out" });
  gsap.from("#about .animate-fade-in", { 
    duration: 1, 
    y: 50, 
    opacity: 0, 
    ease: "power3.out", 
    scrollTrigger: { 
      trigger: "#about", 
      start: "top 80%", 
      toggleActions: "play none none none" // Prevent reset on scroll
    } 
  });
  gsap.from(".project-card", { 
    duration: 0.8, 
    y: 50, 
    opacity: 0, 
    stagger: 0.2, 
    ease: "power3.out", 
    scrollTrigger: { 
      trigger: "#projects", 
      start: "top 80%" 
    } 
  });
  
  // Project Filter
  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("bg-blue-500", "active");
        btn.classList.add("bg-gray-700");
      });
      this.classList.add("bg-blue-500", "active");
      this.classList.remove("bg-gray-700");
  
      const filter = this.getAttribute("data-filter");
      document.querySelectorAll(".project-card").forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
          gsap.from(card, { duration: 0.5, y: 20, opacity: 0 });
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  
  // Contact Form Submission
  document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
  
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert(i18next.t('message_sent'));
        this.reset();
      } else {
        alert(i18next.t('error_occurred'));
      }
    } catch (error) {
      alert(i18next.t('server_error'));
    }
  });
  
  // Call Me Modal
  const callMeBtn = document.getElementById("call-me");
  const callMeModal = document.getElementById("call-me-modal");
  const closeModalBtn = document.getElementById("close-modal");
  
  callMeBtn.addEventListener("click", () => {
    callMeModal.classList.add("active");
  });
  
  closeModalBtn.addEventListener("click", () => {
    callMeModal.classList.remove("active");
  });
  
  callMeModal.addEventListener("click", (e) => {
    if (e.target === callMeModal) {
      callMeModal.classList.remove("active");
    }
  });
  
  // Ensure About section visibility on load
  document.addEventListener("DOMContentLoaded", () => {
    const aboutContent = document.querySelector("#about .max-w-3xl");
    if (aboutContent) {
      aboutContent.style.opacity = "1";
      aboutContent.style.display = "block";
    }
  });