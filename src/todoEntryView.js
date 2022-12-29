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

    // set ELEMENTS att & cls

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

    const setElementAtt = function (todo) {
        entryViewEl.setAttribute('data-view-id', todo.id)
        delBtnEl.setAttribute('data-view-del-id', todo.id)
    }

    // set element's VALUE & TEXT

    const setElementsValueNtext = function (todo) {
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

    // bind EVENTS

    const titleInputListener = function (e) {
        let updatedTodo = { ...todo, title: e.target.value }
        PS.trigger('updateTodo', updatedTodo)
    }

    const noteInputListener = function (e) {
        let updatedTodo = { ...todo, note: e.target.value }
        PS.trigger('updateTodo', updatedTodo)
    }

    const closeBtnEventHandler = function (e) {
        let entryViewEl = e.target.parentElement.parentElement;
        entryViewEl.remove()
    }

    const delBtnListener = function (e) {
        let id = e.target.dataset.viewDelId
        console.log(id)
        PS.trigger('removeEntry', id)
        PS.trigger('delTodo', id)
        closeBtnEventHandler(e)
    }

    const checkBtnEventHandler = function (e) {
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

    // RENDER

    const render = function () {
        headerEl.append(inGroupEl, isCheckEl, delBtnEl, closeEl)
        btnsPanel.append(dueDateEl, priorityEl)

        entryViewEl.append(headerEl, titleEl, btnsPanel, noteEl)

        let entryViewContainer = DOM.find('[data-entry-view]')
        entryViewContainer.replaceChildren(entryViewEl)
    }

    const todoEntryView = function (toViewTodo) {
        todo = toViewTodo;
        setElementAtt(todo)
        setElementsValueNtext(todo)
        render()
    }

    PS.sub('todoEntryView', todoEntryView)

})()


