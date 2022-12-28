import PS from './PS'
import DOM from './DOMquery'

let eventBinder = function () {

    // input title event binding / CREATE todo
    let inputFocusHandler = function () {
        PS.trigger('updatePlaceHolderFocus')
    }

    let inputBlurHandler = function () {
        PS.trigger('updatePlaceHolderBlur')
    }

    let inputEnterhandler = function (e) {
        let item = { title: itemInput.value }
        if (e.key === "Enter") {
            e.preventDefault();
            let todo = PS.trigger('createTodo', item)
            PS.trigger('createEntryTitle', todo)

            itemInput.value = ''
            inputFocusHandler()
        }
    }

    let itemInput = DOM.find('[data-item-input]')
    itemInput.addEventListener('focus', inputFocusHandler)
    itemInput.addEventListener('blur', inputBlurHandler)
    itemInput.addEventListener('keypress', inputEnterhandler)
}

export default eventBinder;