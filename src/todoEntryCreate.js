import DOM from './DOMquery'
import PS from './PS'

(function () {

    // DOM elements creating
    let todo = {}

    let titleEntry = DOM.createEl('div')
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
        titleEntry.setAttribute('data-item', '')
        titleEntry.setAttribute('data-id', todo.id)
        titleEl.setAttribute('id', `title-${todo.id}`)
        inGroup.setAttribute('id', `group-${todo.id}`)
        isCheck.setAttribute('id', `check-${todo.id}`)
        delBtn.setAttribute('id', `del-btn-${todo.id}`)
    }

    // set element's VALUE & TEXT

    const setElementsValueNtext = function () {
        isCheck.textContent = 'o_o';
        inGroup.textContent = todo.group;
        titleEl.textContent = todo.title;
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
        titleEntry.append(inGroup, delBtn, isCheck, titleEl)
        addEntry(titleEntry)
    }

    const addEntry = function (el) {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.prepend(el)
    }

    const createEntryTodo = function ({ id, title, group }) {
        todo = { id, title, group }
        setElementAtt()
        setElementsValueNtext()
        render()
        return titleEntry;
    }

    PS.sub('createEntryTodo', createEntryTodo)
    PS.sub('addEntry', addEntry)

})()