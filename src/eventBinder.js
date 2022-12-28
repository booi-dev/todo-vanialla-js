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

    // read event binding / READ todo

    let titleClickEventHandler = function (e) {
        let titleEl = e.target.parentElement;
        let id = titleEl.dataset.id;

        let todo = PS.trigger("readTodo", +id)
        PS.trigger("displayEntry", todo)
    }

    let titles = DOM.findAll(".title")
    titles.forEach((title) => {
        title.addEventListener('click', titleClickEventHandler)
    })

    // del btn event binding / DELETE todo
    let delBtnEventHandler = function (e) {

        let titleEl = e.target.parentElement;
        let id = titleEl.dataset.id;

        PS.trigger('delTodo', +id)
        PS.trigger('removeEntry', +id)
    }

    let delBtns = DOM.findAll('[data-del]')
    delBtns.forEach((btn) => {
        btn.addEventListener('click', delBtnEventHandler)
    })

    // CLOSE btn event binding / CLOSE todo view
    let entryViewContainer = DOM.find('[data-entry-view]')

    function closeViewEventBinding() {
        let closeBtnEventHandler = function (e) {
            let entryViewEl = e.target.parentElement.parentElement;
            entryViewEl.remove()
        }

        let viewCloseBtn = DOM.find('.close-view--btn')
        viewCloseBtn.addEventListener('click', closeBtnEventHandler)
    }

    PS.sub("closeViewEventBinding", closeViewEventBinding)
}

export default eventBinder;