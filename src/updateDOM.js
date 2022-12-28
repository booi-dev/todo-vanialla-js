import DOM from './DOMquery'
import PS from './PS'
import eventBinder from './eventBinder'

(function updateDOM() {

    let todolist = PS.trigger('getTodolist', 'nothing')

    let renderEntries = function () {
        todolist.forEach(list => {
            let titleEl = PS.trigger('createEntryTitle', list)
            PS.trigger('addEntry', titleEl)
        })
    }

    // ADD one entry DOM
    let addEntry = function (el) {
        let itemsDiv = DOM.findAtt('[data-todo-items]')
        let existingEl = DOM.findAtt('[data-item]')
        itemsDiv.insertBefore(el, existingEl)
    }

    let createEntryTitle = function ({ id, title, group }) {
        let titleEl = DOM.createEl('div')
        let inGroup = DOM.createEl('div')
        let isCheck = DOM.createEl('button')
        let disTitle = DOM.createEl('div')
        let delBtn = DOM.createEl('button')

        titleEl.setAttribute('data-item', '')
        titleEl.setAttribute('data-id', id)
        delBtn.setAttribute('data-del', '')

        titleEl.classList.add('titleEL')
        disTitle.classList.add('title')

        isCheck.textContent = 'o_o';
        inGroup.textContent = group;
        disTitle.textContent = title;
        delBtn.textContent = 'DD'

        titleEl.append(inGroup, isCheck, disTitle, delBtn)

        addEntry(titleEl)

        return titleEl;
    }

    // DISPLAY one entry

    let displayEntry = function (todo) {
        let entryViewEl = DOM.createEl('div')
        let headerEl = DOM.createEl('div')
        let inGroupEl = DOM.createEl('div')
        let isCheckEl = DOM.createEl('button')
        let delBtnEl = DOM.createEl('button')
        let closeEl = DOM.createEl('button')
        let titleEl = DOM.createEl('h1')
        let btnsPanel = DOM.createEl('div')
        let dueDateEl = DOM.createEl('div')
        let priorityEl = DOM.createEl('div')
        let noteEl = DOM.createEl('p')

        entryViewEl.classList.add('entry-view--el')
        headerEl.classList.add('header')
        inGroupEl.classList.add('group')
        isCheckEl.classList.add('check--status')
        delBtnEl.classList.add('del--btn')
        closeEl.classList.add('close-view--btn')

        titleEl.classList.add('title')
        btnsPanel.classList.add('btns-panel')
        dueDateEl.classList.add('due-date')
        priorityEl.classList.add('priority')
        noteEl.classList.add('note')

        inGroupEl.textContent = todo.group;
        isCheckEl.textContent = todo.check;
        delBtnEl.textContent = 'delete'
        closeEl.textContent = 'x'

        titleEl.textContent = todo.title
        dueDateEl.textContent = todo.dueDate
        priorityEl.textContent = todo.priority
        noteEl.textContent = todo.note

        headerEl.append(inGroupEl, isCheckEl, delBtnEl, closeEl)
        btnsPanel.append(dueDateEl, priorityEl)
        entryViewEl.append(headerEl, titleEl, btnsPanel, noteEl)

        let entryViewContainer = DOM.find('[data-entry-view]')
        // entryViewContainer.append(entryViewEl)
        entryViewContainer.replaceChildren(entryViewEl)

        PS.trigger('closeViewEventBinding')
    }

    // REMOVE entry DOM
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
    PS.sub('displayEntry', displayEntry)
    PS.sub('removeEntry', removeEntry)
    PS.sub('updatePlaceHolderFocus', updatePlaceHolderFocus)
    PS.sub('updatePlaceHolderBlur', updatePlaceHolderBlur)

})()