import DOM from './domcache'
import PS from './pubsub'

function app() {
    let entries = DOM.findData('data-entries')
    DOM.updateTextContent(entries, "i need this")

    let item = DOM.findDataAll()
    console.log(item)

    function temp(params) {
        console.log('testing')
    }

    PS.sub("idonno", temp)


}

export default app;