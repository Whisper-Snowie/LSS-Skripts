// ==UserScript==
// @name         window-reszing
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Enable/Disable window resizing
// @author       Whisper-Snowie
// @match        https://www.leitstellenspiel.de/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leitstellenspiel.de
// @grant        GM_addStyle
// ==/UserScript==
const container = document.createElement("div");
container.classList.add("navbar-brand");

const buttonDisable = document.createElement("button");
buttonDisable.textContent = "Disable resizable windows";
document.querySelector(".navbar-header").append(container);
container.appendChild(buttonDisable);
buttonDisable.classList.add('btn', 'btn-default', 'btn-xs');
buttonDisable.addEventListener("click", function () {
  $("#missions_outer").resizable("disable");
  $("#chat_outer").resizable("disable");
  $("#buildings_outer").resizable("disable");
  $("#radio_outer").resizable("disable");
  buttonDisable.style.display = "none";
  buttonEnable.style.display = "block";
})

const buttonEnable = document.createElement("button");
buttonEnable.textContent = "Enable resizable windows";
buttonEnable.style.display = "none";
document.querySelector(".navbar-header").append(container);
container.appendChild(buttonEnable);
buttonEnable.classList.add('btn', 'btn-default', 'btn-xs');
buttonEnable.addEventListener("click", function () {
  $("#missions_outer").resizable("enable");
  $("chat_outer").resizable("enable");
  $("building_outer").resizable("enable");
  $("radio_outer").resizable("enable");
  buttonEnable.style.display = "none";
  buttonDisable.style.display = "block";
})


