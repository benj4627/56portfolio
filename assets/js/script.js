let visibleAnimEl = document.querySelectorAll(".minProfilContainer, .mineEvner, .casesContainer, .kontaktId, .footerContainer, .specifikCaseContentContainer");
let scrollThreshold = 250;
let parallaxText = document.querySelector('.h1Content');
let lokalNav = document.querySelector('.lokalNavUl');
let visibleSlideAnimEl = document.querySelectorAll(".heroCaseContentContainer, .arrowDownCase, .heroContainer");
let burgerButton = document.getElementById("burgerButton");
let navLinks = document.getElementById("navLinks");

// Lyt efter klik på burger og toggle "open"-klassen på navigationen
burgerButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

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

    if (screenWidth > 768 && window.scrollY > scrollPoint) {
        
        lokalNav.classList.add('isVisible');
    } else {
        lokalNav.classList.remove('isVisible');
    }
}

window.addEventListener('scroll', toggleLocalNav);

//Animation til transitions
//Vælge knapper til case studys
document.querySelectorAll('.caseStudyButton').forEach(element => {
    //tilføjer click event og prevent default for at sikre at knapperne ikke linker før animationen er udført
    element.addEventListener('click', (event) => {
        //  // Forhindrer standard handlingen af linket (f.eks. at navigere væk fra siden med det samme)
        event.preventDefault();
        // // Finder den nærmeste overordnede <a> (link) element og henter dens href-attribut,
    // som indeholder URL'en, der skal navigeres til
        const url = element.closest('a').href;

        // Anime.js animation
        anime({
            targets: 'body',
            opacity: [1, 0],
            translateX: [0, -100],
            duration: 600,
            easing: 'easeOutSine',
            complete: () => {
                window.location.href = url;
            }
        });
    });
});
