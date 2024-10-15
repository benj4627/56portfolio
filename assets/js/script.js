let visibleAnimEl = document.querySelectorAll(".minProfilContainer, .mineEvner, .casesContainer, .kontaktId, .footerContainer, .specifikCaseContentContainer");
let scrollThreshold = 250;
let parallaxText = document.querySelector('.h1Content');
let lokalNav = document.querySelector('.lokalNavUl');
let visibleSlideAnimEl = document.querySelectorAll(".heroCaseContentContainer, .arrowDownCase, .heroContainer");



//function der tildeler active class til de valgte elementer
function delayedAnimation() {
    //Bruger forEach loop til at sætte et delay på 200ms, inden aktiv class tildeles til de valgte elementer
    setTimeout(() => {
      visibleSlideAnimEl.forEach(container => {
        container.classList.add("animationVisibleUp");
      });
    }, 150);
  }
  
  // Kalder funktionen når siden loades
  delayedAnimation();



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

window.addEventListener('scroll', toggleLocalNav);


