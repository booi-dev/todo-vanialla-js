import DOM from './DOMquery'
import PS from './PS'
import "./todoEntryCreate.css";

(function () {

    const addEntry = function (el) {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.prepend(el)
    }

    const createEntryTodo = function ({ id, title, group, check, dueDate }) {

        let titleEntry = DOM.createEl('div')
        let rightDiv = DOM.createEl('div')
        let header = DOM.createEl('div')
        let inGroup = DOM.createEl('span')
        let isCheck = DOM.createEl('button')
        let titleEl = DOM.createEl('h1')
        let dueDateEL = DOM.createEl('span')
        let delBtn = DOM.createEl('button')

        // set ELEMENTS att & cls

        titleEntry.classList.add('title-container--entry')
        titleEl.classList.add('title--entry')
        inGroup.classList.add('group--entry')
        isCheck.classList.add('check--entry')
        if (check) isCheck.classList.add('checked')
        dueDateEL.classList.add('due-date--entry')
        delBtn.classList.add('del-btn--entry')

        const setElementAtt = function () {
            titleEntry.setAttribute('data-entry', '')
            titleEntry.setAttribute('data-entry-id', id)
            titleEl.setAttribute('data-title-id', id)
            inGroup.setAttribute('id', `group-${id}`)
            isCheck.setAttribute('id', `check-${id}`)
            delBtn.setAttribute('data-del-id', id)
        }

        // set element's VALUE & TEXT

        const setElementsValueNtext = function () {
            isCheck.textContent = '';
            inGroup.textContent = `> ${group}`;
            titleEl.textContent = title;
            dueDateEL.innerText = dueDate;
            delBtn.textContent = 'DD'
        }

        // bind EVENTS

        let entryViewContainer = DOM.find('.entry-backdrop--view')

        let delBtnEventHandler = function (e) {
            let id = e.target.dataset.delId;
            PS.trigger('removeEntry', id)
            PS.trigger('delTodo', id)
        }

        let titleClickEventHandler = function (e) {
            let id = e.target.dataset.titleId;
            let todo = PS.trigger("readTodo", id)
            PS.trigger("todoEntryView", todo)
            console.log("title click")
            entryViewContainer.classList.remove('hidden')
        }

        let entryClickEventHandler = function (e) {
            let id = e.target.dataset.entryId;
            let todo = PS.trigger("readTodo", id)
            PS.trigger("todoEntryView", todo)
            console.log("div click")
        }

        delBtn.addEventListener('click', delBtnEventHandler)
        titleEl.addEventListener('click', titleClickEventHandler)
        // titleEntry.addEventListener('click', entryClickEventHandler)

        // RENDER

        const render = function () {
            header.append(delBtn)
            rightDiv.append(inGroup, dueDateEL, titleEl)
            titleEntry.append(isCheck, rightDiv, header)
            addEntry(titleEntry)
        }

        // CREATE func

        setElementAtt()
        setElementsValueNtext()
        render()
        return titleEntry;
    }

    PS.sub('createEntryTodo', createEntryTodo)
    PS.sub('addEntry', addEntry)

})()