document.addEventListener("DOMContentLoaded", function () {
  const formations = document.getElementById("formations");
  const competences = document.getElementById("competences");
  const experiences = document.getElementById("experiences");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > formations.offsetTop - windowHeight / 1.5) {
      formations.style.opacity = 1;
      formations.style.transform = "translateX(0)";
    }

    if (scrollPosition > competences.offsetTop - windowHeight / 1.5) {
      competences.style.opacity = 1;
      competences.style.transform = "translateX(0)";
    }

    if (scrollPosition > experiences.offsetTop - windowHeight / 1.5) {
      experiences.style.opacity = 1;
      experiences.style.transform = "translateX(0)";
    }
  });
});

const h3Elements = document.querySelectorAll("h3");

h3Elements.forEach((h3) => {
  h3.addEventListener("mouseover", () => {
    h3.querySelector("::after").style.width = "100%";
  });

  h3.addEventListener("mouseout", () => {
    h3.querySelector("::after").style.width = "0";
  });
});

const menuItems = document.querySelectorAll(".menu-item");
const contentItems = document.querySelectorAll(".contentxp");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    // Réinitialise la classe "active" pour tous les éléments du menu
    menuItems.forEach((item) => item.classList.remove("active"));

    // Ajoute la classe "active" uniquement à l'élément cliqué
    menuItem.classList.add("active");

    // Affiche le contenu correspondant
    const contentToShow = document.getElementById(
      "content-" + menuItem.dataset.content
    );
    contentItems.forEach((contentItem) => (contentItem.style.display = "none"));
    contentToShow.style.display = "block";
  });
});

const loader = document.querySelector(".loader"); 
const loader__text = document.querySelector(".loader__text"); 

const loading = () => { 
  for (let i = 0; i <= 100; i++) { setTimeout(() => { loader__text.innerHTML = i; 
  if (i === 100) { 
    setTimeout(() => { 
      loader.classList.add("animation"); 
      }, 250); 
    } 
  }, i * 15 + 500); 
} 
}; 
window.addEventListener("load", () => {
  var load = localStorage.getItem("loading");
 loading(); 
}); 
 
 const lenis = new Lenis({ 
  lerp: .25 
}) 

function raf(time) {
  lenis.raf(time) 
  requestAnimationFrame(raf)
} 

requestAnimationFrame(raf) 
 
const anim__link = document.querySelectorAll(".lien-animation") 
const transition = document.querySelector(".transition") 
 
anim__link.forEach(link => { 
  link.addEventListener("click", (e) => {
     e.preventDefault(); 
      
     transition.classList.add(".animation") 
     
     setTimeout(() => { 
      window.location.replace(link.href)
     }, (1000));
  }) 
})

/* Cercle photo */

const circle = document.querySelector(".circle-bg");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    const start = 150;  // début de l'animation
    const end = 600;    // fin de l'animation

    // calculer la progression de 0 à 1
    let progress = (scrollPosition - start) / (end - start);

    // limiter entre 0 et 1
    if(progress < 0) progress = 0;
    if(progress > 1) progress = 1;

    // appliquer scale et opacity proportionnellement
    circle.style.transform = `translate(-50%, -50%) scale(${progress})`;
    circle.style.opacity = progress;
});

