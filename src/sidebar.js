import DOM from './DOMquery'
import PS from './PS'
import SETTING_ICON from "./img/setting-icon.png";
import PIN_ICON_GREY from "./img/pin-icon-grey.png";
import PIN_ICON_ACC from "./img/pin-icon-acc.png";

import './sidebar.css'
import { el } from 'date-fns/locale';

(function () {

    let sideBarEl = DOM.find(".app-sidebar")
    let mainEl = DOM.find(".app-main")

    let settingEl = DOM.find(".setting")
    let settingIcon = DOM.createEl('img')
    settingIcon.src = SETTING_ICON;

    const settingAccountSection = function (params) {
        settingEl.append(settingIcon)
    }

    // settingEl.insertRule(':hover { color: white }', 0);

    // settingEl.addEventListener('mouseover', () => {
    //     sideBarEl.classList.add('draw-sidebar')
    // })

    // settingEl.addEventListener('mouseleave', () => {
    //     sideBarEl.classList.remove('draw-sidebar')
    // })

    sideBarEl.addEventListener('mouseover', () => {
        mainEl.classList.add('side-bar-is-drawn')
    })

    sideBarEl.addEventListener('mouseleave', () => {
        mainEl.classList.remove('side-bar-is-drawn')
    })

    let isPin = false;
    let pinEl = DOM.find(".pin")
    let pinIconGrey = DOM.createEl('img')
    let pinIconActive = DOM.createEl('img')
    pinIconGrey.src = PIN_ICON_GREY;
    pinIconActive.src = PIN_ICON_ACC;

    const settingPin = function () {
        if (isPin) {
            pinEl.replaceChildren(pinIconActive)
            mainEl.classList.add("side-bar-is-pinned")
        } else {
            pinEl.replaceChildren(pinIconGrey)
            mainEl.classList.remove("side-bar-is-pinned")
        }
    }

    // mainEl.classList.toggle("side-bar-is-drawn")

    const pinClickEventHandler = function () {
        isPin = !isPin;
        sideBarEl.classList.toggle("stick")
        settingPin()
    }

    pinEl.addEventListener('click', pinClickEventHandler)

    const settingClearAllBtn = function () {
        let clearAllBtn = DOM.find('.remove-task')
        clearAllBtn.onclick = function () {
            PS.trigger('removeAllEntry')
            PS.trigger('delAllTodo')
        }
    }

    settingAccountSection()
    settingPin()
    settingClearAllBtn()

})()