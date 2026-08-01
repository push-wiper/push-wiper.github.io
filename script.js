const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("video").forEach((video) => {
  video.addEventListener(
    "loadedmetadata",
    () => {
      if (video.duration > 0.12) video.currentTime = 0.1;
    },
    { once: true },
  );
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.textContent);
      const original = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = original;
      }, 1600);
    } catch {
      button.textContent = "Select to copy";
    }
  });
});
