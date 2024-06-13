document.addEventListener("DOMContentLoaded", () => {
    const fondo = document.querySelector(".fondo");
    const loginLink = document.querySelector(".login-link");
    const registrarLink = document.querySelector(".registrar-link");
    const iniciarSesionBtn = document.querySelector(".btn-iniciar-sesion");
    const iconoCerrar = document.querySelector(".icono-cerrar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section-content");
    const loginForm = document.querySelector(".contenedor-form.login");
    const registerForm = document.querySelector(".contenedor-form.registrar");

    if (registrarLink) {
        registrarLink.addEventListener("click", (event) => {
            event.preventDefault();
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
        });
    }

    if (loginLink) {
        loginLink.addEventListener("click", (event) => {
            event.preventDefault();
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
        });
    }

    if (iniciarSesionBtn) {
        iniciarSesionBtn.addEventListener("click", () => {
            fondo.classList.add('active-btn');
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
        });
    }

    if (iconoCerrar) {
        iconoCerrar.addEventListener("click", () => {
            fondo.classList.remove('active-btn');
            loginForm.classList.remove('active');
            registerForm.classList.remove('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetSection = link.getAttribute("data-section");
            sections.forEach(section => {
                section.classList.remove("active");
                if (section.id === targetSection) {
                    section.classList.add("active");
                }
            });
        });
    });

    loginForm.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "map.html"; // Redirigir a la página del mapa
    });

    registerForm.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        // Aquí puedes añadir la lógica de registro
        console.log("Registrarse");
    });
});