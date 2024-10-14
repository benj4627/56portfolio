let visibleAnimEl = document.querySelectorAll(".minProfilContainer, .mineEvner");
let scrollThreshold = 250;
let parallaxText = document.querySelector('.h1Content');


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

  

