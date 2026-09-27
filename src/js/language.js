import { translations } from "./translations.js";

let currentLanguage = "ru";

export function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[currentLanguage]?.[key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  const switcher = document.querySelector(".language-switcher");

  switcher.classList.toggle(
    "en",
    currentLanguage === "en"
  );

  document.querySelectorAll(".language-btn").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.lang === currentLanguage
    );
  });
}

export function initLanguage() {
  const buttons = document.querySelectorAll(".language-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.lang === currentLanguage) {
        return;
      }

      currentLanguage = button.dataset.lang;

      translatePage();
    });
  });

  translatePage();
}