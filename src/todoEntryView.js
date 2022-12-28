import DOM from './DOMquery'
import PS from './PS'

(function () {

    let todo;

    // DOM elements creating
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

    // DOM set att & cls

    entryViewEl.classList.add('entry-el--view')
    headerEl.classList.add('header--view')
    inGroupEl.classList.add('group--view')
    isCheckEl.classList.add('check-status--vier')
    delBtnEl.classList.add('del-btn--view')
    closeEl.classList.add('close-view-btn--view')

    titleEl.classList.add('title--view')
    btnsPanel.classList.add('btns-panel--view')
    dueDateEl.classList.add('due-date--view')
    priorityEl.classList.add('priority--view')
    noteEl.classList.add('note--view')

    let setElementAtt = function (todo) {
        entryViewEl.setAttribute('data-entry-id', todo.id)
    }

    let setElementsValueNtext = function (todo) {
        inGroupEl.textContent = todo.group;

        todo.check
            ? isCheckEl.innerText = 'checked'
            : isCheckEl.innerText = 'not checked'

        delBtnEl.innerText = 'delete'
        closeEl.innerText = 'x'

        titleEl.value = todo.title
        dueDateEl.innerText = todo.dueDate
        priorityEl.innerText = todo.priority
        noteEl.value = todo.note
    }

    // bing events

    let titleInputListener = function (e) {
        let updatedTodo = { ...todo, title: e.target.value }
        PS.trigger('updateTodo', updatedTodo)
    }

    let noteInputListener = function (e) {
        let updatedTodo = { ...todo, note: e.target.value }
        PS.trigger('updateTodo', updatedTodo)
    }

    let closeBtnEventHandler = function (e) {
        let entryViewEl = e.target.parentElement.parentElement;
        entryViewEl.remove()
    }

    let delBtnListener = function (e) {
        let entryViewEl = e.target.parentElement.parentElement
        let id = entryViewEl.dataset.entryId
        PS.trigger('removeEntry', +id)
        PS.trigger('delTodo', +id)
        closeBtnEventHandler(e)
    }

    let checkBtnEventHandler = function (e) {
        let updatedTodo = { ...todo, check: !todo.check }
        PS.trigger('updateTodo', updatedTodo)
        todo.check = !todo.check
        setElementsValueNtext(todo)
        render()
    }

    titleEl.addEventListener('change', titleInputListener)
    noteEl.addEventListener('change', noteInputListener)
    delBtnEl.addEventListener('click', delBtnListener)
    closeEl.addEventListener('click', closeBtnEventHandler)
    isCheckEl.addEventListener('click', checkBtnEventHandler)

    let render = function () {
        headerEl.append(inGroupEl, isCheckEl, delBtnEl, closeEl)
        btnsPanel.append(dueDateEl, priorityEl)

        entryViewEl.append(headerEl, titleEl, btnsPanel, noteEl)

        let entryViewContainer = DOM.find('[data-entry-view]')
        entryViewContainer.replaceChildren(entryViewEl)
    }

    function todoEntryView(toViewTodo) {
        todo = toViewTodo;
        setElementAtt(todo)
        setElementsValueNtext(todo)
        render()
    }

    PS.sub('todoEntryView', todoEntryView)

})()


