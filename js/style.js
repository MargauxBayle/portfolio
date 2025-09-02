document.querySelectorAll("label ul a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu-toggle").checked = false;
  });
});

gsap.registerPlugin(ScrollTrigger);
