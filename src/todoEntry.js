import DOM from './DOMquery'
import PS from './PS'

(function todoEntry() {

    let addEntry = function (el) {
        // console.log('and entry')
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.prepend(el)
    }

    let removeEntry = function (id) {
        let getTargetEntry = DOM.find(`[data-item][data-id='${id}']`)
        getTargetEntry.remove()
    }

    let createEntryTodo = function ({ id, title, group }) {
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
            PS.trigger("displayEntry", todo)
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

    // let targetEntry = DOM.find(`[data-item][data-id='${todo.id}']`)
    // let targetTitle = DOM.findId(`title-${todo.id}`)
    // let targetGroup = DOM.findId(`group-${todo.id}`)
    // let targetCheck = DOM.findId(`check-${todo.id}`)
    // let targetDueDate = DOM.findId(`due-date-${todo.id}`)
    // targetTitle.innerText = todo.title;
    // targetGroup.innerText = todo.group;
    // targetCheck.innerText = todo.check;
    // console.log(targetTitle)

    let updateTodo = function (todo) {
        PS.trigger('updateTodo', todo)

    }

    let displayEntry = function (todo) {

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

        entryViewEl.classList.add('entry-view--el')
        headerEl.classList.add('header--view')
        inGroupEl.classList.add('group--ciew')
        isCheckEl.classList.add('check-status--vier')
        delBtnEl.classList.add('del-btn--view')
        closeEl.classList.add('close-view-btn--view')

        titleEl.classList.add('title')
        btnsPanel.classList.add('btns-panel')
        dueDateEl.classList.add('due-date')
        priorityEl.classList.add('priority')
        noteEl.classList.add('note')

        let titleInputListener = function (e) {
            let updatedTodo = { ...todo, title: e.target.value }
            updateTodo(updatedTodo)
        }

        let noteInputListener = function (e) {
            let updatedTodo = { ...todo, note: e.target.value }
            updateTodo(updatedTodo)
        }

        let closeBtnEventHandler = function (e) {
            let entryViewEl = e.target.parentElement.parentElement;
            entryViewEl.remove()
        }

        inGroupEl.textContent = todo.group;
        isCheckEl.textContent = todo.check;
        delBtnEl.textContent = 'delete'
        closeEl.textContent = 'x'

        titleEl.value = todo.title
        dueDateEl.textContent = todo.dueDate
        priorityEl.textContent = todo.priority
        noteEl.value = todo.note

        titleEl.addEventListener('change', titleInputListener)
        noteEl.addEventListener('change', noteInputListener)

        headerEl.append(inGroupEl, isCheckEl, delBtnEl, closeEl)
        btnsPanel.append(dueDateEl, priorityEl)
        entryViewEl.append(headerEl, titleEl, btnsPanel, noteEl)

        closeEl.addEventListener('click', closeBtnEventHandler)

        let entryViewContainer = DOM.find('[data-entry-view]')
        entryViewContainer.replaceChildren(entryViewEl)
    }

    PS.sub('createEntryTodo', createEntryTodo)
    PS.sub('addEntry', addEntry)
    PS.sub('removeEntry', removeEntry)
    PS.sub('displayEntry', displayEntry)
    // PS.sub('updateEntry', updateEntry)

})()