import PS from './PS'
import DOM from './DOMquery'
import './inputEntry.css'

let inputEntry = function () {

    let inputField = DOM.find('[data-item-input]')

    let inputFocusHandler = function () {
        inputField.placeholder = ' enter task title';
    }

    let inputBlurHandler = function () {
        inputField.placeholder = '+ add task';
    }

    let entryInputhandler = function (e) {
        let item = { title: inputField.value }
        if (e.key === "Enter") {
            e.preventDefault();
            let todo = PS.trigger('createTodo', item)
            PS.trigger('createEntryTodo', todo)
            inputField.value = ''
            inputFocusHandler()
        }
    }

    inputField.addEventListener('focus', inputFocusHandler)
    inputField.addEventListener('blur', inputBlurHandler)
    inputField.addEventListener('keypress', entryInputhandler)
}

export default inputEntry;