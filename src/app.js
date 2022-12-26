import DOM from './domcache'
import PS from './pubsub'
import './todo'

function app() {
    let itemsDiv = DOM.findData('data-items')
    let newEnry = DOM.createNew('')

    function temp(params) {
        console.log(params)
    }

    PS.sub("New", temp)
    let getitem = PS.trigger('createEntry', 'i care')

    console.log(getitem)

}

export default app;