import DOM from './DOMcache'
import PS from './pubsub'

(function updateDOM(params) {

    let createEntryTitle = function ({ id, title, group }) {

        let titleEl = DOM.createEl('div')
        let inGroup = DOM.createEl('div')
        let isCheck = DOM.createEl('button')
        let disTitle = DOM.createEl('div')

        titleEl.setAttribute('data-item', '')
        titleEl.setAttribute('data-id', id)

        isCheck.textContent = 'o_o';
        inGroup.textContent = group;
        disTitle.textContent = title;

        titleEl.append(inGroup, isCheck, disTitle)

        return titleEl;
    }

    let addEntry = function (el) {
        let itemsDiv = DOM.findData('data-todo-items')
        let existingEl = DOM.findData('data-item')
        itemsDiv.insertBefore(el, existingEl)
    }

    let itemInput = DOM.findData('data-item-input')

    let updatePlaceholderFocus = function (e) {
        itemInput.placeholder = 'Enter task title';
    }

    let updatePlaceholderBlur = function (e) {
        itemInput.placeholder = '+ add task';
    }

    PS.sub('createEntryTitle', createEntryTitle)
    PS.sub('addEntry', addEntry)
    PS.sub('updatePlaceHolderFocus', updatePlaceholderFocus)
    PS.sub('updatePlaceholderBlur', updatePlaceholderBlur)

})()