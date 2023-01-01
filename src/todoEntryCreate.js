import { isPast } from 'date-fns'
import DOM from './DOMquery'
import PS from './PS'
import DELETE_BTN from './img/delete.png'
import "./todoEntryCreate.css";

(function () {

    const addEntry = function (el) {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.prepend(el)
    }

    const createEntryTodo = function (todo) {

        let titleEntry = DOM.createEl('div')
        let titleGroupDiv = DOM.createEl('div')
        let header = DOM.createEl('div')
        let inGroup = DOM.createEl('span')
        let isCheck = DOM.createEl('button')
        let titleEl = DOM.createEl('h1')
        let dueDateEL = DOM.createEl('span')
        let delBtn = DOM.createEl('button')
        let delIcon = DOM.createEl('img')

        // set ELEMENTS att & cls

        titleEntry.classList.add('title-div--entry')
        titleGroupDiv.classList.add('title-grp--entry')
        header.classList.add('title-header--entry', 'hidden')
        titleEl.classList.add('title--entry')
        inGroup.classList.add('group--entry')
        isCheck.classList.add('check--entry')
        dueDateEL.classList.add('due-date--entry')
        delBtn.classList.add('del-btn--entry')
        delIcon.classList.add('del-icon--entry')

        const setElementAtt = function () {
            titleEntry.setAttribute('data-entry', '')
            titleEntry.setAttribute('data-entry-id', todo.id)
            titleEl.setAttribute('data-title-id', todo.id)
            inGroup.setAttribute('id', `group-${todo.id}`)
            isCheck.setAttribute('id', `check-${todo.id}`)
            delIcon.setAttribute('data-del-id', todo.id)
            delIcon.src = DELETE_BTN;
        }

        // set element's VALUE & TEXT

        const setElementsValueNtext = function () {
            isCheck.innerText = '';
            inGroup.innerText = `> ${todo.group}`;
            titleEl.innerText = todo.title;
            dueDateEL.innerText = todo.dueDate;
            // delBtn.innerText = 'DD'
        }

        // RENDER

        const render = function () {
            delBtn.append(delIcon)
            header.append(delBtn)
            titleGroupDiv.append(inGroup, dueDateEL, titleEl)
            titleEntry.append(isCheck, titleGroupDiv, header)
            addEntry(titleEntry)
        }

        // mouseover & mouseleave events for del

        const titleEntryMouseOver = function () {
            header.classList.remove('hidden')
        }

        const titleEntryMouseLeave = function () {
            header.classList.add('hidden')
        }

        // bind EVENTS

        let entryViewContainer = DOM.find('.entry-backdrop--view')

        const delBtnEventHandler = function (e) {
            let id = e.target.dataset.delId;
            PS.trigger('removeEntry', id)
            PS.trigger('delTodo', id)
        }

        const displayEntryViewModal = function (id) {
            if (!id) return
            let todo = PS.trigger("readTodo", id)
            PS.trigger("todoEntryView", todo)
            entryViewContainer.classList.remove('hidden')
        }

        const titleClickEventHandler = function (e) {
            let id = e.target.dataset.titleId;
            displayEntryViewModal(id)
        }

        const entryClickEventHandler = function (e) {
            let id = e.target.dataset.entryId;
            displayEntryViewModal(id)
        }

        const toggleCheckBtnHandler = function (e) {
            let updatedTodo = { ...todo, check: !todo.check }
            PS.trigger('updateTodo', updatedTodo)
            todo.check = !todo.check
        }

        isCheck.addEventListener('click', toggleCheckBtnHandler)
        delBtn.addEventListener('click', delBtnEventHandler)
        titleEl.addEventListener('click', titleClickEventHandler)
        titleEntry.addEventListener('click', entryClickEventHandler)
        titleEntry.addEventListener('mouseover', titleEntryMouseOver)
        titleEntry.addEventListener('mouseleave', titleEntryMouseLeave)


        // checked functionality
        const checkedDiv = function (params) {
            if (todo.check) {
                titleEntry.classList.add('checked')
                inGroup.classList.add('checked')
                isCheck.classList.add('checked')
                dueDateEL.classList.add('checked')
                titleEl.removeEventListener('click', titleClickEventHandler)
                titleEntry.removeEventListener('click', entryClickEventHandler)
            }
        }

        const dueDatePast = function (params) {
            let isDueDatePast = isPast(new Date(todo.dueDate))
            if (isDueDatePast) dueDateEL.classList.add('past')
        }


        // CREATE func

        setElementAtt()
        setElementsValueNtext()
        checkedDiv()
        dueDatePast()
        render()
        return titleEntry;
    }

    PS.sub('createEntryTodo', createEntryTodo)
    PS.sub('addEntry', addEntry)

})()