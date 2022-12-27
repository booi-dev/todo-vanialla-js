import DOM from './DOMcache'
import PS from './pubsub'
import './todoData'
import './updateDOM'
import './todoCRUD'

function app() {

    // get todolist from todoData module using pubsub
    let todolist = PS.trigger('getTodo', {})

    todolist.forEach(list => {
        let listEl = PS.trigger('createEntryTitle', list)
        PS.trigger('addEntry', listEl)
    })

    let inputEnterhandler = function (e) {
        let item = { title: itemInput.value }
        if (e.key === "Enter") {
            e.preventDefault();
            let titleEl = PS.trigger('createEntryTitle', item)
            PS.trigger('addEntry', titleEl)
            PS.trigger('addTodo', item)
            PS.trigger('updatePlaceholderFocus')
        }
    }

    let itemInput = DOM.findData('data-item-input')
    itemInput.addEventListener('focus', PS.trigger('updatePlaceholderFocus'))
    itemInput.addEventListener('blur', PS.trigger('updatePlaceholderBlur'))
    itemInput.addEventListener('keypress', inputEnterhandler)
}

export default app;