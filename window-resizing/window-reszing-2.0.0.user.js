// ==UserScript==
// @name         window-reszing
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @description  Enable/Disable window resizing
// @author       Whisper-Snowie
// @match        https://www.leitstellenspiel.de/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leitstellenspiel.de
// @grant        GM_addStyle
// ==/UserScript==

function main () {
    let help_menu = document.getElementById("help_menu");

    const button_disable = document.createElement("button");
    button_disable.textContent = "Disable resizable windows";
    help_menu.querySelector("li").append(button_disable);
    button_disable.classList.add('btn', 'btn-default', 'btn-xs');
    button_disable.addEventListener("click", function () {
        $("#missions_outer").resizable("disable");
        $("#chat_outer").resizable("disable");
        $("#buildings_outer").resizable("disable");
        $("#radio_outer").resizable("disable");
        button_disable.style.display = "none";
        button_enable.style.display = "block";
    })

    const button_enable = document.createElement("button");
    button_enable.textContent = "Enable resizable windows";
    help_menu.querySelector("li").append(button_enable);
    button_enable.classList.add('btn', 'btn-default', 'btn-xs');
    button_enable.addEventListener("click", function () {
        $("#missions_outer").resizable("enable");
        $("chat_outer").resizable("enable");
        $("building_outer").resizable("enable");
        $("radio_outer").resizable("enable");
        button_enable.style.display = "none";
        button_disable.style.display = "block";
    })
}

main ();