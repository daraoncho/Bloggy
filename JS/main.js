AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
 
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


//Theme mode

const icon = document.querySelector(".light");

//Local storage
if(localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData === "light") {
  document.querySelector(".dark-mode").style.display = "none";
    document.querySelector(".light-mode").style.display = "block";
    document.querySelector("body").style.transition = "500ms";
    document.body.classList.remove("dark-theme");
}else if(localData === "dark") {
  document.querySelector(".light-mode").style.display = "none";
    document.querySelector(".dark-mode").style.display = "block";
    document.querySelector(".dark-mode").style.width = "1.25rem";
    document.querySelector(".dark-mode").style.height = "1.25rem";
    document.querySelector("body").style.transition = "500ms";
    document.body.classList.add("dark-theme");
}

//Theme
icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    document.querySelector(".light-mode").style.display = "none";
    document.querySelector(".dark-mode").style.display = "block";
    document.querySelector(".dark-mode").style.width = "1.25rem";
    document.querySelector(".dark-mode").style.height = "1.25rem";
    document.querySelector("body").style.transition = "500ms";
    localStorage.setItem("theme", "dark");

  } else{
    document.querySelector(".dark-mode").style.display = "none";
    document.querySelector(".light-mode").style.display = "block";
    document.querySelector("body").style.transition = "500ms";
    localStorage.setItem("theme", "light");
  }
})

//Filter categories

function filterList(data, keyword) {
  const filteredList = document.querySelectorAll(".cat");
  for (let i = 0; i < data.length; i++) {
    if (data[i].toLowerCase().includes(keyword.toLowerCase())) {
      filteredList.push(data[i]);
    }
  }
  return filteredList;
}

//Accordion
// const faqs = document.querySelector(".faq");
// const answers = document.querySelector(".answer");
// const faqIcon = document.querySelector(".faq-icon");


// faqs.addEventListener("click", () => {
//   answers.classList.toggle("show-answer")
//   faqIcon.classList.toggle("icon-deg")
// })
