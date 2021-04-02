const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const lightBgColor = "rgb(255 255 255 / 50%)";
const darkBgColor = "rgb(0 0 0 / 50%)";
const lightText = "Light Mode";
const darkText = "Dark Mode";
const lightIcon = "fa-sun";
const darkIcon = "fa-moon";

// Switch Theme Dynamically
function switchTheme(e) {
  e.target.checked
    ? setMode("dark", darkBgColor, lightBgColor, darkText, lightIcon, darkIcon)
    : setMode(
        "light",
        lightBgColor,
        darkBgColor,
        lightText,
        darkIcon,
        lightIcon
      );
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

function setMode(theme, color1, color2, iconText, iconToRemove, iconToAdd) {
  document.documentElement.setAttribute("data-theme", theme);
  manageLocalStorage(theme);
  changeColors(color1, color2);
  changeIcon(iconText, iconToRemove, iconToAdd);
  changeIllustrations(theme);
}

function manageLocalStorage(theme) {
  localStorage.setItem("theme", theme);
}

function changeColors(color1, color2) {
  nav.style.backgroundColor = color1;
  textBox.style.backgroundColor = color2;
}

function changeIcon(iconText, iconToRemove, iconToAdd) {
  toggleIcon.children[0].textContent = iconText;
  toggleIcon.children[1].classList.replace(iconToRemove, iconToAdd);
}

function changeIllustrations(theme) {
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        setMode("dark", darkBgColor, lightBgColor, darkText, lightIcon, darkIcon);
    }
}
