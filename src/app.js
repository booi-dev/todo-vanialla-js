import DOM from './DOMcache'
import PS from './PS'
import './todoData'
import './updateDOM'
import './todoCRUD'

function app() {

    let todolist = PS.trigger('getTodo', {})

    let createAndAddTitleEntry = function (item) {
        let titleEl = PS.trigger('createEntryTitle', item)
        PS.trigger('addEntry', titleEl)
    }

    todolist.forEach(list => {
        createAndAddTitleEntry(list)
    })

    let inputFocusHandler = function (params) {
        PS.trigger('updatePlaceHolderFocus')
    }

    let inputBlurHandler = function (params) {
        PS.trigger('updatePlaceHolderBlur')
    }

    let inputEnterhandler = function (e) {
        let item = { title: itemInput.value }
        if (e.key === "Enter") {
            e.preventDefault();
            let todo = PS.trigger('createTodo', item)
            createAndAddTitleEntry(todo)
            itemInput.value = ''
            inputFocusHandler()
        }
    }

    let itemInput = DOM.findAtt('data-item-input')
    itemInput.addEventListener('focus', inputFocusHandler)
    itemInput.addEventListener('blur', inputBlurHandler)
    itemInput.addEventListener('keypress', inputEnterhandler)
}

export default app;