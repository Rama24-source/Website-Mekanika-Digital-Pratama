const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: "1000",
});
ScrollReveal().reveal(".header_content .description_header", {
  ...scrollRevealOption,
  delay: "1500",
});
ScrollReveal().reveal(".header_btns", {
  ...scrollRevealOption,
  origin: "1500",
});

ScrollReveal().reveal(".destination_card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase_image img", {
  ...scrollRevealOption,
  origin: left,
});ScrollReveal().reveal(".showcase_content h4", {
  ...scrollRevealOption,
  delay: 500,
});ScrollReveal().reveal(".showcase_content p", {
  ...scrollRevealOption,
  delay: 1000,
});ScrollReveal().reveal(".showcase_btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner_card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover_card", {
  ...scrollRevealOption,
  interval: 500,
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && subject && message) {
      formMessage.style.color = "green";
      formMessage.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      formMessage.style.color = "red";
      formMessage.textContent = "⚠️ Please fill in all fields!";
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Form submitted! (dummy)");
});