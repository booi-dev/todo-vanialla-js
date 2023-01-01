import DOM from './DOMquery'
import SETTING_ICON from "./img/setting-icon.png";
import PS from './PS'

(function () {

    let settingEl = DOM.find(".setting")
    let settingIcon = DOM.createEl('img')
    settingIcon.src = SETTING_ICON
    settingEl.append(settingIcon)

    let clearAllBtn = DOM.find('.remove-task')
    clearAllBtn.onclick = function () {
        PS.trigger('removeAllEntry')
        PS.trigger('delAllTodo')
    }

})()