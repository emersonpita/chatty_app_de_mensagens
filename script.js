// Armazena os links do menu de navegação
const navigationLinks = document.querySelectorAll(".item-menu");

// Armazena as seções correspondentes a cada link do menu de navegação
const sections = document.querySelectorAll('#inicio, #sobre, #tecnologia, #faq, #download');

// Adiciona o evento de rolagem na janela
window.addEventListener('scroll', function() {
  // Percorre todas as seções
  for (let i = 0; i < sections.length; i++) {
    // Obtém a posição da seção atual em relação à tela
    const sectionRect = sections[i].getBoundingClientRect();
    
    // Verifica se a seção atual está visível na tela (com uma margem de 200 pixels)
    if (sectionRect.top <= 200 && sectionRect.bottom >= 200) {
      // Adiciona a classe "active" ao link correspondente da seção atual
      navigationLinks[i].classList.add('active');
    } else {
      // Remove a classe "active" dos links não correspondentes à seção atual
      navigationLinks[i].classList.remove('active');
    }
  }
});

// Armazena o checkbox do menu e o menu de navegação
const checkbox = document.querySelector("#hamburguer-menu");
const navMenu = document.querySelector(".nav-mobile");
const buttonDownload = document.querySelector(".button-download-mobile");

// Adiciona o evento de click no menu para fechar a overlay
navMenu.addEventListener("click", () => {
  checkbox.checked = false;
});

// Adiciona o evento de click no menu para fechar a overlay
buttonDownload.addEventListener("click", () => {
    checkbox.checked = false;
  });

// Adiciona a classe scroll ao header quando há rolagem na página
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
});