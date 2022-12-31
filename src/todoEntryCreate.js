import DOM from './DOMquery'
import PS from './PS'
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

        // set ELEMENTS att & cls

        titleEntry.classList.add('title-div--entry')
        titleGroupDiv.classList.add('title-grp--entry')
        header.classList.add('title-header--entry')
        titleEl.classList.add('title--entry')
        inGroup.classList.add('group--entry')
        isCheck.classList.add('check--entry')
        if (todo.check) isCheck.classList.add('checked')
        dueDateEL.classList.add('due-date--entry')
        delBtn.classList.add('del-btn--entry')

        const setElementAtt = function () {
            titleEntry.setAttribute('data-entry', '')
            titleEntry.setAttribute('data-entry-id', todo.id)
            titleEl.setAttribute('data-title-id', todo.id)
            inGroup.setAttribute('id', `group-${todo.id}`)
            isCheck.setAttribute('id', `check-${todo.id}`)
            delBtn.setAttribute('data-del-id', todo.id)
        }

        // set element's VALUE & TEXT

        const setElementsValueNtext = function () {
            isCheck.innerText = '';
            inGroup.innerText = `> ${todo.group}`;
            titleEl.innerText = todo.title;
            dueDateEL.innerText = todo.dueDate;
            delBtn.innerText = 'DD'
        }

        // RENDER

        const render = function () {
            header.append(delBtn)
            titleGroupDiv.append(inGroup, dueDateEL, titleEl)
            titleEntry.append(isCheck, titleGroupDiv, header)
            addEntry(titleEntry)
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

        delBtn.addEventListener('click', delBtnEventHandler)
        titleEl.addEventListener('click', titleClickEventHandler)
        titleEntry.addEventListener('click', entryClickEventHandler)
        isCheck.addEventListener('click', toggleCheckBtnHandler)

        // CREATE func

        setElementAtt()
        setElementsValueNtext()
        render()
        return titleEntry;
    }

    PS.sub('createEntryTodo', createEntryTodo)
    PS.sub('addEntry', addEntry)

})()