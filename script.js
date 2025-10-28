// Menu Toggle para Mobile
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const body = document.body;

    /* ===========================
       MENU MOBILE (abrir/fechar)
    ============================ */
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    /* ===========================
       DROPDOWNS (mobile e desktop)
    ============================ */
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');

        if (dropbtn) {
            dropbtn.addEventListener('click', function (e) {
                // Só aplica no mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();

                    // Fecha outros dropdowns abertos
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.classList.remove('active');
                    });

                    // Abre/fecha o atual
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    /* ===========================
       FECHAR MENU AO CLICAR EM UM LINK
    ============================ */
    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                dropdowns.forEach(d => d.classList.remove('active'));
            }
        });
    });

    /* ===========================
       SMOOTH SCROLL (rolagem suave)
    ============================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* ===========================
       FORMULÁRIO DE CONTATO
    ============================ */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Obrigado pelo contato! Retornaremos em breve.');
            contactForm.reset();
        });
    }

    /* ===========================
       SOMBRA NA NAVBAR AO ROLAR
    ============================ */
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    /* ===========================
       TOGGLE MODO ESCURO/CLARO
    ============================ */
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
        }

        themeToggle.addEventListener('change', function () {
            if (themeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});


console.log("✅ script.js carregado com sucesso!");
