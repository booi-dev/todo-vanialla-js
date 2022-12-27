import DOM from './DOMcache'
import PS from './PS'

(function updateDOM() {

    let todolist = PS.trigger('getTodolist', 'nothing')

    let renderEntries = function () {
        todolist.forEach(list => {
            let titleEl = PS.trigger('createEntryTitle', list)
            PS.trigger('addEntry', titleEl)
        })
    }

    let addEntry = function (el) {
        let itemsDiv = DOM.findAtt('[data-todo-items]')
        let existingEl = DOM.findAtt('[data-item]')
        itemsDiv.insertBefore(el, existingEl)
    }

    let createEntryTitle = function ({ id, title, group }) {
        // console.log(id)

        let titleEl = DOM.createEl('div')
        let inGroup = DOM.createEl('div')
        let isCheck = DOM.createEl('button')
        let disTitle = DOM.createEl('div')
        let delBtn = DOM.createEl('button')

        titleEl.setAttribute('data-item', '')
        titleEl.setAttribute('data-id', id)

        delBtn.setAttribute('data-del', '')

        isCheck.textContent = 'o_o';
        inGroup.textContent = group;
        disTitle.textContent = title;
        delBtn.textContent = 'DD'

        titleEl.append(inGroup, isCheck, disTitle, delBtn)

        addEntry(titleEl)

        return titleEl;
    }

    let removeEntry = function (id) {
        let getTargetEntry = DOM.findAtt(`[data-item][data-id='${id}']`)
        getTargetEntry.remove()
    }

    let updatePlaceHolderFocus = function () {
        let itemInput = DOM.findAtt('[data-item-input]')
        itemInput.placeholder = ' enter task title'
    }

    let updatePlaceHolderBlur = function () {
        let itemInput = DOM.findAtt('[data-item-input]')
        itemInput.placeholder = '+ add task'
    }

    PS.sub('renderEntries', renderEntries)

    PS.sub('createEntryTitle', createEntryTitle)
    PS.sub('addEntry', addEntry)
    PS.sub('removeEntry', removeEntry)
    PS.sub('updatePlaceHolderFocus', updatePlaceHolderFocus)
    PS.sub('updatePlaceHolderBlur', updatePlaceHolderBlur)

})()