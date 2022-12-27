import PS from './PS'
import DOM from './DOMquery'
import './todoCRUD'
import './updateDOM'
import eventBinder from './eventBinder'

function app() {
    PS.trigger('renderEntries')
    eventBinder()

    // let delBtns = DOM.findAttAll('[data-del]')
    // delBtns.forEach((btn) => {
    //     console.log(btn)
    // })


}

export default app;