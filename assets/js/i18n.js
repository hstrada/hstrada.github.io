let selectedLanguage = ptbr;
let aPt = document.getElementById("aPt");
let aEn = document.getElementById("aEn");

const defaultColor = "#ffc400";

aPt.style.backgroundColor = defaultColor;

window.onload = loadLanguage(selectedLanguage);

function loadLanguage(language) {
  let translation = JSON.stringify(language);
  let i18n = JSON.parse(translation);

  let data = document.querySelectorAll("[data-i18n]");
  data.forEach((element) => {
    if (!element.dataset.i18n.includes("."))
      element.innerHTML = i18n[element.dataset.i18n];
    else {
      element.innerHTML =
        i18n[element.dataset.i18n.split(".")[0]][
          element.dataset.i18n.split(".")[1]
        ];
    }
  });
}

let btnChangeLanguage = document.getElementById("btnLanguage");
btnChangeLanguage.onclick = function () {
  if (selectedLanguage === ptbr) {
    selectedLanguage = en;
    aEn.style.backgroundColor = defaultColor;
    aPt.style.backgroundColor = "transparent";
  } else {
    selectedLanguage = ptbr;
    aPt.style.backgroundColor = defaultColor;
    aEn.style.backgroundColor = "transparent";
  }
  loadLanguage(selectedLanguage);
};
