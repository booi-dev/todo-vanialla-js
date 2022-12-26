import DOM from './domcache'
import PS from './pubsub'
import todoData from './todoData'
import './todoCRUD'

function app() {
    let itemsDiv = DOM.findData('data-todo-items')

    let createTodoTitleEl = function (id, title) {
        let titleEl = DOM.createEl('div')
        titleEl.setAttribute('data-id', id)
        titleEl.textContent = title;
        return titleEl;
    }

    let addEntry = function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            let itemsDiv = DOM.findData('data-todo-items')
            let newEntry = PS.trigger('createEntry', itemInput.value)
            let neweEntryItemEl = createTodoTitleEl(newEntry.id, newEntry.title)
            itemsDiv.append(neweEntryItemEl)

            itemInput.value = '';
            updateInputPlaceholder()
        }
    }

    let updateInputPlaceholder = function (e) {
        console.log(e)
        itemInput.placeholder = 'Enter task title'
    }

    let todolist = todoData.returnDatalist()

    todolist.forEach(list => {
        let listEl = createTodoTitleEl(list.id, list.title)
        itemsDiv.append(listEl)
    })


    let itemInput = DOM.findData('data-item-input')
    itemInput.addEventListener('click', updateInputPlaceholder)
    itemInput.addEventListener('keypress', addEntry)

    // let getitem = PS.trigger('createEntry', 'i care')

}

export default app;