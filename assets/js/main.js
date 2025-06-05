// Funções para animações e interações
document.addEventListener('DOMContentLoaded', function() {
  // Toggle do tema claro/escuro
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');
  
  // Verificar preferência salva no localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('bi-moon-fill');
    icon.classList.add('bi-sun-fill');
  }
  
  // Alternar tema ao clicar no botão
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Atualizar ícone
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Menu mobile toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }
  
  // Header scroll effect
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.step, .benefit-card, .form-section, .form-actions, .stat-card, .dashboard-card');
  
  const revealOnScroll = function() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('revealed');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Verificar elementos visíveis no carregamento inicial
  
  // Dashboard sidebar toggle
  const toggleSidebar = document.querySelector('.toggle-sidebar');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');
  
  if (toggleSidebar) {
    toggleSidebar.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      mainContent.classList.toggle('full-width');
    });
  }
});
