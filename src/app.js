import DOM from './domcache'
import PS from './pubsub'
import './todoData'
import './todoCRUD'

function app() {

    let createTodoTitleEl = function ({ id, title, group }) {
        let titleEl = DOM.createEl('div')
        let inGroup = DOM.createEl('div')
        let isCheck = DOM.createEl('button')
        let disTitle = DOM.createEl('div')

        titleEl.setAttribute('data-item', '')
        titleEl.setAttribute('data-id', id)

        isCheck.textContent = 'o_o';
        inGroup.textContent = group;
        disTitle.textContent = title;

        titleEl.append(inGroup, isCheck, disTitle)

        return titleEl;
    }

    let addTodoEl = function (el) {
        let itemsDiv = DOM.findData('data-todo-items')
        let existingEl = DOM.findData('data-item')
        itemsDiv.insertBefore(el, existingEl)
    }

    let addEntry = function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            // create new todo 
            let newEntry = PS.trigger('createEntry', { title: itemInput.value })
            let neweEntryItemEl = createTodoTitleEl(newEntry)
            addTodoEl(neweEntryItemEl)

            itemInput.value = '';
            updatePlaceholderFocus()
        }
    }

    let updatePlaceholderFocus = function (e) {
        itemInput.placeholder = 'Enter task title';
    }

    let updatePlaceholderBlur = function (e) {
        itemInput.placeholder = '+ add task';
    }

    // get todolist from todoData module using pubsub
    let todolist = PS.trigger('getTodoDataList', {})

    todolist.forEach(list => {
        let listEl = createTodoTitleEl(list)
        addTodoEl(listEl)
    })

    let itemInput = DOM.findData('data-item-input')
    itemInput.addEventListener('focus', updatePlaceholderFocus)
    itemInput.addEventListener('blur', updatePlaceholderBlur)
    itemInput.addEventListener('keypress', addEntry)

}

export default app;