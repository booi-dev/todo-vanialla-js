import DOM from './DOMcache'
import PS from './pubsub'
import './todoData'
import './updateDOM'
import './todoCRUD'

function app() {

    // get todolist from todoData module using pubsub
    let todolist = PS.trigger('getTodo', {})

    let createAndAddTitle = function (item) {
        let titleEl = PS.trigger('createEntryTitle', item)
        PS.trigger('addEntry', titleEl)
        // console.log(item)
    }

    todolist.forEach(list => {
        createAndAddTitle(list)
    })

    let inputEnterhandler = function (e) {
        let item = { title: itemInput.value }
        if (e.key === "Enter") {
            e.preventDefault();
            let todo = PS.trigger('createTodo', item)
            createAndAddTitle(todo)
            PS.trigger('addTodo', todo)
            PS.trigger('updatePlaceholderFocus')
        }
    }

    let itemInput = DOM.findData('data-item-input')
    itemInput.addEventListener('focus', focusHandler)
    itemInput.addEventListener('blur', PS.trigger('updatePlaceholderBlur'))
    itemInput.addEventListener('keypress', inputEnterhandler)


    function focusHandler() {
        console.log('shukfh')
        PS.trigger('updatePlaceholderFocus')
    }


}

export default app;