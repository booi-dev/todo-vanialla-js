import { isPast } from 'date-fns';
import DOM from './DOMquery';
import PS from './PS';
import DELETE_BTN from './img/delete.png';
import './todoEntryView.css';

(function () {

    let todo;

    // DOM elements creating
    let entryView = DOM.createEl('div')
    let headerEl = DOM.createEl('div')
    let headerRightEl = DOM.createEl('div')
    let inGroupEl = DOM.createEl('div')
    let isCheckEl = DOM.createEl('button')
    let delBtnEl = DOM.createEl('button')
    let delIcon = DOM.createEl('img')
    let closeEl = DOM.createEl('button')
    let titleEl = DOM.createEl('input')
    let btnsPanel = DOM.createEl('div')
    let dueDateEl = DOM.createEl('div')
    let priorityEl = DOM.createEl('div')
    let noteLable = DOM.createEl('label')
    let noteEl = DOM.createEl('textarea')

    // set ELEMENTS att & cls

    entryView.classList.add('entry--view')
    headerEl.classList.add('header--view')
    inGroupEl.classList.add('group--view')
    isCheckEl.classList.add('check-status--vier')
    delBtnEl.classList.add('del-btn--view')
    delIcon.classList.add('del-icon--view')
    closeEl.classList.add('close-view-btn--view')

    titleEl.classList.add('title--view')
    btnsPanel.classList.add('btns-panel--view')
    dueDateEl.classList.add('due-date--view')
    priorityEl.classList.add('priority--view')
    noteLable.classList.add('note-label--view')
    noteEl.classList.add('note--view')

    const setElementAtt = function (todo) {
        entryView.setAttribute('data-view-id', todo.id)
        closeEl.setAttribute('data-view-close-id', todo.id)
        delIcon.setAttribute('data-view-del-id', todo.id)
        delIcon.src = DELETE_BTN
        noteEl.setAttribute('placeholder', "write note")
    }

    // set element's VALUE & TEXT

    const setElementsValueNtext = function (todo) {
        inGroupEl.textContent = `> ${todo.group}`;
        isCheckEl.innerText = ''
        todo.check
            ? isCheckEl.classList.add('checked')
            : isCheckEl.classList.remove('checked')
        closeEl.innerText = 'x'
        titleEl.value = todo.title;
        dueDateEl.innerText = todo.dueDate;
        priorityEl.innerText = todo.priority;
        noteLable.innerText = 'NOTES';
        noteEl.value = todo.note;

        let isDueDatePast = isPast(new Date(todo.dueDate))
        if (isDueDatePast) dueDateEl.classList.add('past')
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

    const closeViewHandler = function (e) {
        entryViewContainer.classList.add('hidden')
        entryView.remove()
    }

    const delBtnListener = function (e) {
        let id = e.target.dataset.viewDelId
        PS.trigger('removeEntry', id)
        PS.trigger('delTodo', id)
        closeViewHandler()
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
    closeEl.addEventListener('click', closeViewHandler)
    isCheckEl.addEventListener('click', checkBtnEventHandler)

    let entryViewContainer = DOM.find('.entry-backdrop--view')

    entryViewContainer.addEventListener('click', closeViewHandler)

    // RENDER

    const render = function () {

        delBtnEl.append(delIcon)
        headerRightEl.append(isCheckEl, delBtnEl, closeEl)
        headerEl.append(inGroupEl, headerRightEl)
        btnsPanel.append(dueDateEl, priorityEl)
        entryView.append(headerEl, titleEl, btnsPanel, noteLable, noteEl)
        let viewDiv = DOM.find('[data-entry-view]')
        viewDiv.replaceChildren(entryView)
    }

    const todoEntryView = function (toViewTodo) {
        todo = toViewTodo;
        setElementAtt(todo)
        setElementsValueNtext(todo)
        render()
    }

    PS.sub('todoEntryView', todoEntryView)

})()


