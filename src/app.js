import DOM from './domcache'
import PS from './pubsub'

function app() {
    let entries = DOM.findData('data-entries')
    DOM.updateTextContent(entries, "i need this")

    let item = DOM.findDataAll()
    // console.log(item)

    function temp(data) {
        console.log('testing ' + data)
    }

    function temp2(data) {
        console.log('testing2 ' + data)
    }

    function temp3(data) {
        console.log('testing3 ' + data)
    }

    function temp4(data) {
        console.log('testing4 ' + data)
    }

    PS.sub("idonno", temp)
    PS.sub("idonno", temp2)
    PS.sub("idonno", temp3)
    PS.sub("idonno", temp4)

    PS.trigger("idonno", 12)

}

export default app;