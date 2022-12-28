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

    // event binder

    // ADD one entry DOM
    let addEntry = function (el) {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.prepend(el)
    }

    let delBtnEventHandler = function (e) {
        let titleEl = e.target.parentElement;
        let id = titleEl.dataset.id;
        PS.trigger('delTodo', +id)
        PS.trigger('removeEntry', +id)
    }

    let titleClickEventHandler = function (e) {
        let titleEl = e.target.parentElement;
        let id = titleEl.dataset.id;

        let todo = PS.trigger("readTodo", +id)
        PS.trigger("displayEntry", todo)
    }

    let createEntryTitle = function ({ id, title, group }) {
        let titleEntry = DOM.createEl('div')
        let inGroup = DOM.createEl('div')
        let isCheck = DOM.createEl('button')
        let titleEl = DOM.createEl('div')
        let delBtn = DOM.createEl('button')

        titleEntry.setAttribute('data-item', '')
        titleEntry.setAttribute('data-id', id)
        delBtn.setAttribute('data-del', '')

        titleEntry.classList.add('titleEL')
        titleEl.classList.add('title')

        isCheck.textContent = 'o_o';
        inGroup.textContent = group;
        titleEl.textContent = title;
        delBtn.textContent = 'DD'

        delBtn.addEventListener('click', delBtnEventHandler)
        titleEl.addEventListener('click', titleClickEventHandler)

        titleEntry.append(inGroup, delBtn, isCheck, titleEl)
        addEntry(titleEntry)

        // PS.trigger('delBtnEventBinding')

        return titleEntry;
    }

    // DISPLAY one entry


    let closeBtnEventHandler = function (e) {
        let entryViewEl = e.target.parentElement.parentElement;
        entryViewEl.remove()
    }


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

        closeEl.addEventListener('click', closeBtnEventHandler)

        let entryViewContainer = DOM.find('[data-entry-view]')
        entryViewContainer.replaceChildren(entryViewEl)

    }

    // REMOVE entry DOM
    let removeEntry = function (id) {
        let getTargetEntry = DOM.find(`[data-item][data-id='${id}']`)
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