const timelineShell = document.querySelector(".timeline-shell");
const lightIcon = "assets/cool-light.svg";
const darkIcon = "assets/cool-dark.svg";

const updateFavicon = (isDark) => {
  let favicon = document.querySelector('link[rel="icon"]:not([media])');
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }
  favicon.href = isDark ? darkIcon : lightIcon;
};

const media = window.matchMedia("(prefers-color-scheme: dark)");
updateFavicon(media.matches);
media.addEventListener("change", (event) => updateFavicon(event.matches));

if (timelineShell) {
  const timelineCards = timelineShell.querySelectorAll(".timeline-card");

  const resetCardScroll = (card) => {
    // Wait until hover/focus styles are removed, then reset internal scroll.
    requestAnimationFrame(() => {
      if (!card.matches(":hover") && !card.matches(":focus-within")) {
        card.scrollTop = 0;
      }
    });
  };

  timelineCards.forEach((card) => {
    card.addEventListener("mouseleave", () => {
      resetCardScroll(card);
    });

    card.addEventListener("focusout", () => {
      resetCardScroll(card);
    });

    card.addEventListener(
      "touchend",
      () => {
        resetCardScroll(card);
      },
      { passive: true },
    );
  });
}
