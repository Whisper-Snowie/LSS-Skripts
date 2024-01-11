// ==UserScript==
// @name         windows-draggable
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @description  Enable/disable window movement
// @author       Whisper-Snowie/linusehle
// @match        https://www.leitstellenspiel.de/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leitstellenspiel.de
// @grant        GM_addStyle
// ==/UserScript==

function main () {
    let help_menu = document.getElementById("help_menu");

    const button_disable = document.createElement("button");
    button_disable.textContent = "Disable dragable windows";
    help_menu.querySelector("li").append(button_disable);
    button_disable.classList.add('btn', 'btn-default', 'btn-xs');
    button_disable.addEventListener("click", function () {
        $("#missions_outer").draggable("disable");
        $("#chat_outer").draggable("disable");
        $("#buildings_outer").draggable("disable");
        $("#radio_outer").draggable("disable");s
    })

    const button_enable = document.createElement("button");
    button_enable.textContent = "Enable dragable windows";
    help_menu.querySelector("li").append(button_enable);
    button_enable.classList.add('btn', 'btn-default', 'btn-xs');
    button_enable.addEventListener("click", function () {
        $("#missions_outer").draggable("enable");
        $("chat_outer").draggable("enable");
        $("building_outer").draggable("enable");
        $("radio_outer").draggable("enable");
    })
}

main ();