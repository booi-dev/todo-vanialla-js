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

        const setElementAtt = function (todo) {
            titleEntry.setAttribute('data-item', '')
            titleEntry.setAttribute('data-id', id)
            titleEl.setAttribute('id', `title-${id}`)
            inGroup.setAttribute('id', `group-${id}`)
            isCheck.setAttribute('id', `check-${id}`)
            delBtn.setAttribute('id', `del-btn-${id}`)
        }

        // set element's VALUE & TEXT

        const setElementsValueNtext = function (todo) {
            isCheck.textContent = '';
            inGroup.textContent = group;
            titleEl.textContent = title;
            delBtn.textContent = 'DD'
        }

        // bind EVENTS

        let delBtnEventHandler = function (e) {
            let titleEl = e.target.parentElement;
            let targetId = titleEl.dataset.id;
            PS.trigger('removeEntry', targetId)
            PS.trigger('delTodo', targetId)
        }

        let titleClickEventHandler = function (e) {
            let titleEl = e.target.parentElement;
            let targetId = titleEl.dataset.id;
            let targetTodo = PS.trigger("readTodo", targetId)
            PS.trigger("todoEntryView", targetTodo)
        }

        delBtn.addEventListener('click', delBtnEventHandler)
        titleEl.addEventListener('click', titleClickEventHandler)

        // RENDER

        const render = function () {
            header.append(delBtn)
            rightDiv.append(inGroup, titleEl)
            titleEntry.append(isCheck, rightDiv, header)
            console.log(titleEntry)
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