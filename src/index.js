import { enableDarkStyle, disableDarkStyle } from "./js/toggleSwitch";
import { initLanguage } from "./js/language";
import { initNavigation } from "./js/navigation";


const styleToggle = document.querySelector("#toggle1");
const styleMode = localStorage.getItem("styleMode");

const heroBackground = document.querySelector('.hero__background');

if (styleMode === "dark") {
  enableDarkStyle();
    heroBackground.src = "/img/backgroundDark.png";
  styleToggle.checked = true;
} else {
  disableDarkStyle();
  heroBackground.src = "/img/backgroundLight.png";
  styleToggle.checked = false;
}


styleToggle.addEventListener("change", () => {
  if (styleToggle.checked) {
    enableDarkStyle();
    heroBackground.src = "/img/backgroundDark.png"
  } else {
    disableDarkStyle();
     heroBackground.src = "/img/backgroundLight.png";
  }
});



const button = document.querySelector(".hero__button");

button.addEventListener("pointermove", (e) => {
  const rect = button.getBoundingClientRect();

  button.style.setProperty(
    "--x",
    ((e.clientX - rect.x) / rect.width) * 100
  );

  button.style.setProperty(
    "--y",
    ((e.clientY - rect.y) / rect.height) * 100
  );
});



initLanguage();
initNavigation();