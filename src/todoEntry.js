import { compareAsc, format } from 'date-fns'

import DOM from './DOMquery'
import PS from './PS'

(function todoEntry() {
    let date = new Date()
    format(date, 'yyyy-MM-dd')
    // console.log(date)

    function createEntryTodo({ id, title, group }) {
        let titleEntry = DOM.createEl('div')
        let inGroup = DOM.createEl('div')
        let isCheck = DOM.createEl('button')
        let titleEl = DOM.createEl('div')
        let delBtn = DOM.createEl('button')

        titleEntry.setAttribute('data-item', '')
        titleEntry.setAttribute('data-id', id)
        // delBtn.setAttribute('data-del', '')

        titleEl.setAttribute('id', `title-${id}`)
        inGroup.setAttribute('id', `group-${id}`)
        isCheck.setAttribute('id', `check-${id}`)
        delBtn.setAttribute('id', `del-btn-${id}`)

        titleEntry.classList.add('title-container--entry')
        titleEl.classList.add('title--entry')
        inGroup.classList.add('group--entry')
        isCheck.classList.add('check--entry')
        delBtn.classList.add('del-btn--entry')

        let delBtnEventHandler = function (e) {
            let titleEl = e.target.parentElement;
            let id = titleEl.dataset.id;
            removeEntry(+id)
            PS.trigger('delTodo', +id)
        }

        let titleClickEventHandler = function (e) {
            let titleEl = e.target.parentElement;
            let id = titleEl.dataset.id;
            let todo = PS.trigger("readTodo", +id)
            PS.trigger("todoEntryView", todo)
        }

        isCheck.textContent = 'o_o';
        inGroup.textContent = group;
        titleEl.textContent = title;
        delBtn.textContent = 'DD'

        delBtn.addEventListener('click', delBtnEventHandler)
        titleEl.addEventListener('click', titleClickEventHandler)

        titleEntry.append(inGroup, delBtn, isCheck, titleEl)
        addEntry(titleEntry)

        return titleEntry;
    }

    function addEntry(el) {
        // console.log('and entry')
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.prepend(el)
    }

    function updateTodo(todo) {
        PS.trigger('updateTodo', todo)
    }

    function removeEntry(id) {
        let getTargetEntry = DOM.find(`[data-item][data-id='${id}']`)
        getTargetEntry.remove()
    }

    PS.sub('createEntryTodo', createEntryTodo)
    PS.sub('addEntry', addEntry)
    PS.sub('removeEntry', removeEntry)
    // PS.sub('updateEntry', updateEntry)

})()