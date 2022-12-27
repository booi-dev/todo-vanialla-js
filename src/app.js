import PS from './PS'
import DOM from './DOMcache'
import './todoCRUD'
import './updateDOM'

function app() {
    // let todolist = PS.trigger('getTodo', {})

    PS.trigger('renderEntries')

    let createAndAddTitleEntry = function (item) {
        let titleEl = PS.trigger('createEntryTitle', item)
        PS.trigger('addEntry', titleEl)
    }

    // todolist.forEach(list => {
    //     createAndAddTitleEntry(list)
    // })

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

    let itemInput = DOM.findAtt('[data-item-input]')
    itemInput.addEventListener('focus', inputFocusHandler)
    itemInput.addEventListener('blur', inputBlurHandler)
    itemInput.addEventListener('keypress', inputEnterhandler)

    let delBtnEventHandler = function (e) {
        let id = e.target.getAttribute("data-del-id")
        // PS.trigger('delTodo', id)
        PS.trigger('removeEntry', id)
    }

    let delBtns = DOM.findAttAll('[data-del]')
    delBtns.forEach((btn) => {
        btn.addEventListener('click', delBtnEventHandler)
    })

}

export default app;