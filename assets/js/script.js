let visibleAnimEl = document.querySelectorAll(".minProfilContainer, .mineEvner, .casesContainer, .kontaktId, .footerContainer");
let scrollThreshold = 450;
let parallaxText = document.querySelector('.h1Content');
const lokalNav = document.querySelector('.lokalNavUl');

window.addEventListener('scroll', function() {
    // fanger scroll positionen, og giver det til det valgte HTML element
    let scrollPosition = window.scrollY;
    
    
    //flytter img en smule, når brugeren scroller ned. Tildeler CSS styling med translate y og en værdi dertil 
    parallaxText.style.transform = 'translateY(' + scrollPosition * 0.60 + 'px)';
  });

function toggleClassScroll() {
    //tilføjer eventListnere som lytter efter scroll-begivenheden. Når brugeren scroller siden, udføres funktionen.
    window.addEventListener("scroll", function() {
      //Tjekker, om den aktuelle scroll position (window.scrollY) er større end  det tilladte scrollThreshold
      if (window.scrollY > scrollThreshold) {
        //Gennemgår HTML elementer visibleAnimEl og tilføjer klassen animationVisible. 
        visibleAnimEl.forEach(container => {
          container.classList.add("animationVisible");
        });
      }
    });
  };
  //kalder function når siden loader, for at tjekke scroll position
  toggleClassScroll();


// Funktion til at vise lokal nav, når brugeren scroller under hero section
function toggleLocalNav() {
    const scrollPoint = 250; 

    if (window.scrollY > scrollPoint) {
        
        lokalNav.classList.add('isVisible');
    } else {
        
        lokalNav.classList.remove('isVisible');
    }
}

// Listen for scroll events
window.addEventListener('scroll', toggleLocalNav);


