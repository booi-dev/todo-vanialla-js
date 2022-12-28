import DOM from './DOMquery'
import PS from './PS'

(function updateDOM() {

    let todolist = PS.trigger('getTodolist', 'nothing')

    let renderEntries = function () {
        todolist.forEach(list => {
            let titleEl = PS.trigger('createEntryTitle', list)
            PS.trigger('addEntry', titleEl)
        })
    }

    // event binder

    let addEntry = function (el) {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.prepend(el)
    }

    let delBtnEventHandler = function (e) {
        let titleEl = e.target.parentElement;
        let id = titleEl.dataset.id;
        PS.trigger('delTodo', +id)
        PS.trigger('removeEntry', +id)
    }

    let titleClickEventHandler = function (e) {
        let titleEl = e.target.parentElement;
        let id = titleEl.dataset.id;

        let todo = PS.trigger("readTodo", +id)
        PS.trigger("displayEntry", todo)
    }

    let createEntryTitle = function ({ id, title, group }) {
        let titleEntry = DOM.createEl('div')
        let inGroup = DOM.createEl('div')
        let isCheck = DOM.createEl('button')
        let titleEl = DOM.createEl('div')
        let delBtn = DOM.createEl('button')

        titleEntry.setAttribute('data-item', '')
        titleEntry.setAttribute('data-id', id)
        delBtn.setAttribute('data-del', '')

        titleEntry.classList.add('titleEL')
        titleEl.classList.add('title')

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

    // REMOVE entry DOM
    let removeEntry = function (id) {
        let getTargetEntry = DOM.find(`[data-item][data-id='${id}']`)
        getTargetEntry.remove()
    }

    let updatePlaceHolderFocus = function () {
        let itemInput = DOM.findAtt('[data-item-input]')
        itemInput.placeholder = ' enter task title'
    }

    let updatePlaceHolderBlur = function () {
        let itemInput = DOM.findAtt('[data-item-input]')
        itemInput.placeholder = '+ add task'
    }

    PS.sub('renderEntries', renderEntries)

    PS.sub('createEntryTitle', createEntryTitle)
    PS.sub('addEntry', addEntry)

    PS.sub('removeEntry', removeEntry)
    PS.sub('updatePlaceHolderFocus', updatePlaceHolderFocus)
    PS.sub('updatePlaceHolderBlur', updatePlaceHolderBlur)

})()