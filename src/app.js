import DOM from './domcache'
import PS from './pubsub'

function app() {
    let entries = DOM.findData('data-entries')
    DOM.updateTextContent(entries, "i need this")

    let item = DOM.findDataAll()
    // console.log(item)

    function temp() {
        console.log('testing')
    }

    function temp2() {
        console.log('testing')
    }

    function temp3() {
        console.log('testing')
    }

    function temp4() {
        console.log('testing')
    }

    PS.sub("idonno", temp)
    PS.sub("idonno", temp2)
    PS.sub("idonno", temp3)
    PS.sub("idonno", temp4)
    PS.sub("idonno", temp)
    PS.sub("idonno", temp)
    PS.unsub("idonno", temp2)
}

export default app;