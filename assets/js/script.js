let visibleAnimEl = document.querySelectorAll(".minProfilContainer, .mineEvner");
let scrollThreshold = 350;


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


