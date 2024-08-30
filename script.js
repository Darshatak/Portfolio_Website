var tl = gsap.timeline();

tl.from(".navitem", {
  stagger: 0.3,
  duration: 2,
  y: 20,
  delay: 7,
  ease: "Expo.easeInOut",
  opacity: 0,
})
  .from(
    "#NameLanding",
    {
      stagger: 0.3,
      duration: 2,
      y: 20,
      ease: "Expo.easeInOut",
      opacity: 0,
    },
    "-=2"
  )
  .from(
    "#smline",
    {
      width: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    },
    "-=2"
  )
  .from(
    ".leftitem",
    {
      stagger: 0.3,
      duration: 2,
      y: 20,
      ease: "Expo.easeInOut",
      opacity: 0,
    },
    "-=2"
  )
  .from(
    "#right img",
    {
      duration: 2,
      scale: 1.05,
      ease: "Expo.easeInOut",
      opacity: 0,
    },
    "-=2"
  );

function circleMouseFollow() {
  window.addEventListener("mousemove", function (data) {
    this.document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${data.clientX}px,${data.clientY}px)`;
  });
  window.addEventListener("click", function (data) {
    this.document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${data.clientX}px,${data.clientY}px) scale(2)`;
    this.document.querySelector("#minicircle").style.background = "#e40e0e";
  });
}

circleMouseFollow();
const navigationLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    navigationLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
  });
}

function changeTab(tab) {
  if (tab == "Home") {
    document.getElementById("PageNav").innerText = tab;
    document.getElementById("section1").style.display = "block";
    document.getElementById("section2").style.display = "none";
    bg.style.transform = "scale(1)";
    bg.style.borderRadius = "0";

    bg.style.backgroundColor = "rgba(0,0,0,0)";
  } else {
    document.getElementById("PageNav").innerText = tab;
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    const components = document.querySelectorAll(".component");
    components.forEach(function (component) {
      component.classList.remove("active");
    });

    // Show the selected component
    const selectedComponent = document.getElementById(tab);
    selectedComponent.classList.add("active");
    bg.style.transform = "scale(1)";
    bg.style.borderRadius = "0";
    bg.style.backgroundColor = "rgba(0,0,0,0)";
  }
}

// Style2

// // element toggle function
// const elementToggleFunc = function (elem) {
//   elem.classList.toggle("active");
// };

// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () {
//   elementToggleFunc(sidebar);
// });

// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// };

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {
//   testimonialsItem[i].addEventListener("click", function () {
//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector(
//       "[data-testimonials-title]"
//     ).innerHTML;
//     modalText.innerHTML = this.querySelector(
//       "[data-testimonials-text]"
//     ).innerHTML;

//     testimonialsModalFunc();
//   });
// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {
//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }
//   });
// }

// page navigation variables
const navigationLinks2 = document.querySelectorAll("[data-nav-link2]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const onClickValue = navigationLinks[i].getAttribute("onClick");

    // Log the onClick value
    console.log(onClickValue);

    // Extract the parameter from the onClick value
    const param = onClickValue.match(/changeTab\('(.+?)'\)/)[1];

    // Log the parameter
    console.log(param);

    // Example usage: Show/hide sections based on parameter
    if (param === "Home") {
      document.getElementById("section1").style.display = "block";
      document.getElementById("section2").style.display = "none";
    } else {
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "block";
      bg.style.transform = "scale(1)";
      bg.style.borderRadius = "0";
      bg.style.backgroundColor = "rgba(0,0,0,0)";
      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }
    }
  });
}

document.querySelectorAll("a").forEach((link) => {
  // When the mouse enters a link
  link.addEventListener("mouseenter", () => {
    document.querySelector("#minicircle").style.backgroundColor = "#0e11e4";
    document.querySelector("#minicircle").style.transform = `scale(2)`;
  });

  // When the mouse leaves a link
  link.addEventListener("mouseleave", () => {
    document.querySelector("#minicircle").style.backgroundColor = "#e40e0e";
  });
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".ri-menu-2-line", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".custom-link", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".magnet");
// Shery.imageMasker(".navHover" /* Element to target.*/, {
//   //Parameters are optional.
//   mouseFollower: true,
//   text: "NavBar",
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });
