// ==UserScript==
// @name         window-draggable
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Enable/Disable window movement
// @author       Whisper-Snowie
// @match        https://www.leitstellenspiel.de/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leitstellenspiel.de
// @grant        GM_addStyle
// ==/UserScript==
const container = document.createElement("div");
container.classList.add("navbar-brand");

const buttonDisable = document.createElement("button");
buttonDisable.textContent = "Disable moveable windows";
document.querySelector(".navbar-header").append(container);
container.appendChild(buttonDisable);
buttonDisable.classList.add('btn', 'btn-default', 'btn-xs');
buttonDisable.addEventListener("click", function () {
  $("#missions_outer").draggable("disable");
  $("#chat_outer").draggable("disable");
  $("#buildings_outer").draggable("disable");
  $("#radio_outer").draggable("disable");
  buttonDisable.style.display = "none";
  buttonEnable.style.display = "block";
})

const buttonEnable = document.createElement("button");
buttonEnable.textContent = "Enable moveable windows";
buttonEnable.style.display = "none";
document.querySelector(".navbar-header").append(container);
container.appendChild(buttonEnable);
buttonEnable.classList.add('btn', 'btn-default', 'btn-xs');
buttonEnable.addEventListener("click", function () {
  $("#missions_outer").draggable("enable");
  $("chat_outer").draggable("enable");
  $("building_outer").draggable("enable");
  $("radio_outer").draggable("enable");
  buttonEnable.style.display = "none";
  buttonDisable.style.display = "block";
})

