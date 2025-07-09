//---- FOOTER ----

//---- ONLY ONE FOOTER MENU ACCORDION OPENED AT A TIME ----

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-input");

  accordions.forEach((accordion) => {
    accordion.addEventListener("change", () => {
      if (accordion.checked) {
        // Close all other accordions
        accordions.forEach((otherAccordion) => {
          if (otherAccordion !== accordion) {
            otherAccordion.checked = false;
          }
        });
      }
    });
  });
});
