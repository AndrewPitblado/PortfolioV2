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
