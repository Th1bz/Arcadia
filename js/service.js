document.addEventListener("DOMContentLoaded", function() {
    const article = document.querySelector(".scroll-article");
  
    function checkVisibility() {
      const articleRect = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Vérifie si l'article est visible dans la fenêtre
      if (articleRect.top < windowHeight && articleRect.bottom > 0) {
        article.classList.add("visible");
      } else {
        article.classList.remove("visible");
      }
    }
  
    
  
    // Vérifie la visibilité lors du défilement
    window.addEventListener("scroll", checkVisibility);
  });
  