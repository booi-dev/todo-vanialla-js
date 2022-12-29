import DOM from './DOMquery'
import PS from './PS'
// import "./todoEntryCreate.css";

(function () {

    const addEntry = function (el) {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.prepend(el)
    }

    const createEntryTodo = function ({ id, title, group }) {

        let titleEntry = DOM.createEl('div')
        let rightDiv = DOM.createEl('div')
        let header = DOM.createEl('div')
        let inGroup = DOM.createEl('div')
        let isCheck = DOM.createEl('button')
        let titleEl = DOM.createEl('div')
        let delBtn = DOM.createEl('button')

        // set ELEMENTS att & cls

        titleEntry.classList.add('title-container--entry')
        titleEl.classList.add('title--entry')
        inGroup.classList.add('group--entry')
        isCheck.classList.add('check--entry')
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
            inGroup.textContent = group;
            titleEl.textContent = title;
            delBtn.textContent = 'DD'
        }

        // bind EVENTS

        let delBtnEventHandler = function (e) {
            let id = e.target.dataset.delId;
            PS.trigger('removeEntry', id)
            PS.trigger('delTodo', id)
        }

        let titleClickEventHandler = function (e) {
            let id = e.target.dataset.titleId;
            let todo = PS.trigger("readTodo", id)
            PS.trigger("todoEntryView", todo)
        }

        delBtn.addEventListener('click', delBtnEventHandler)
        titleEl.addEventListener('click', titleClickEventHandler)

        // RENDER

        const render = function () {
            header.append(delBtn)
            rightDiv.append(inGroup, titleEl)
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