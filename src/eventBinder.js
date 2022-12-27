import PS from './PS'
import DOM from './DOMquery'

function eventBinder() {
    console.log("event binding")

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

    let itemInput = DOM.findAtt('[data-item-input]')
    itemInput.addEventListener('focus', inputFocusHandler)
    itemInput.addEventListener('blur', inputBlurHandler)
    itemInput.addEventListener('keypress', inputEnterhandler)


    // del btn event binding / DELETE todo
    let delBtnEventHandler = function (e) {

        let titleEl = e.target.parentElement;
        let id = titleEl.dataset.id;

        PS.trigger('delTodo', +id)
        PS.trigger('removeEntry', +id)
    }

    let delBtns = DOM.findAttAll('[data-del]')
    delBtns.forEach((btn) => {
        btn.addEventListener('click', delBtnEventHandler)
    })

    // read event binding / READ todo

    let titleClickEventHandler = function (params) {
        console.log('title clicked')
    }

    let titles = DOM.findAll(".title")
    titles.forEach((title) => {
        title.addEventListener('click', titleClickEventHandler)
    })

}

export default eventBinder;