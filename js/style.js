document.querySelectorAll("label ul a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu-toggle").checked = false;
  });
});

gsap.to(".dot", {
  y: -60,
  stagger: {
    each: 0.2,
    repeat: -1,
    yoyo: true,
  },
});

gsap.to(".shadow", {
  y: 60,
  stagger: {
    each: 0.2,
    repeat: -1,
    yoyo: true,
  },
  opacity: 0.1,
});

const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
