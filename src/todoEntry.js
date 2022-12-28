import DOM from './DOMquery'
import PS from './PS'

(function todoEntry() {

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
            viewEntry(todo)
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

    // let targetEntry = DOM.find(`[data-item][data-id='${todo.id}']`)
    // let targetTitle = DOM.findId(`title-${todo.id}`)
    // let targetGroup = DOM.findId(`group-${todo.id}`)
    // let targetCheck = DOM.findId(`check-${todo.id}`)
    // let targetDueDate = DOM.findId(`due-date-${todo.id}`)
    // targetTitle.innerText = todo.title;
    // targetGroup.innerText = todo.group;
    // targetCheck.innerText = todo.check;
    // console.log(targetTitle)

    function viewEntry(todo) {

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

        entryViewEl.setAttribute('data-entry-id', todo.id)

        entryViewEl.classList.add('entry-el--view')
        headerEl.classList.add('header--view')
        inGroupEl.classList.add('group--view')
        isCheckEl.classList.add('check-status--vier')
        delBtnEl.classList.add('del-btn--view')
        closeEl.classList.add('close-view-btn--view')

        titleEl.classList.add('title--view')
        btnsPanel.classList.add('btns-panel--view')
        dueDateEl.classList.add('due-date--view')
        priorityEl.classList.add('priority--view')
        noteEl.classList.add('note--view')

        let titleInputListener = function (e) {
            let updatedTodo = { ...todo, title: e.target.value }
            updateTodo(updatedTodo)
        }

        let noteInputListener = function (e) {
            let updatedTodo = { ...todo, note: e.target.value }
            updateTodo(updatedTodo)
        }

        let delBtnListener = function (e) {
            let entryViewEl = e.target.parentElement.parentElement
            let id = entryViewEl.dataset.entryId
            removeEntry(+id)
            PS.trigger('delTodo', +id)
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
        delBtnEl.addEventListener('click', delBtnListener)
        closeEl.addEventListener('click', closeBtnEventHandler)

        headerEl.append(inGroupEl, isCheckEl, delBtnEl, closeEl)
        btnsPanel.append(dueDateEl, priorityEl)

        entryViewEl.append(headerEl, titleEl, btnsPanel, noteEl)

        let entryViewContainer = DOM.find('[data-entry-view]')
        entryViewContainer.replaceChildren(entryViewEl)
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
    PS.sub('viewEntry', viewEntry)
    // PS.sub('updateEntry', updateEntry)

})()