import PS from './PS'
import DOM from './DOMquery'

(function todoEntryView() {

    let entryViewEl = DOM.createEl('div')
    let headerEl = DOM.createEl('div')
    let inGroupEl = DOM.createEl('div')
    let isCheckEl = DOM.createEl('button')
    let delBtnEl = DOM.createEl('button')
    let closeEl = DOM.createEl('button')
    let titleEl = DOM.createEl('input')
    let btnsPanel = DOM.createEl('div')
    let dueDateEl = DOM.createEl('div')
    let priorityEl = DOM.createEl('div')
    let noteEl = DOM.createEl('textarea')

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

    let inputListener = function (params) {
        console.log(titleEl.value)
        // update Entry and Todo
    }

    let updateEntry = function (params) {
        let inputField = DOM.find('[data-item-input]')
    }

    let closeBtnEventHandler = function (e) {
        let entryViewEl = e.target.parentElement.parentElement;
        entryViewEl.remove()
    }

    let displayEntry = function (todo) {

        inGroupEl.textContent = todo.group;
        isCheckEl.textContent = todo.check;
        delBtnEl.textContent = 'delete'
        closeEl.textContent = 'x'

        titleEl.value = todo.title
        dueDateEl.textContent = todo.dueDate
        priorityEl.textContent = todo.priority
        noteEl.value = todo.note

        titleEl.addEventListener('change', inputListener)

        headerEl.append(inGroupEl, isCheckEl, delBtnEl, closeEl)
        btnsPanel.append(dueDateEl, priorityEl)
        entryViewEl.append(headerEl, titleEl, btnsPanel, noteEl)

        closeEl.addEventListener('click', closeBtnEventHandler)

        let entryViewContainer = DOM.find('[data-entry-view]')
        entryViewContainer.replaceChildren(entryViewEl)
    }

    PS.sub('displayEntry', displayEntry)

})()