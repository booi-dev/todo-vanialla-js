import DOM from './domcache'

function app() {
    let entries = DOM.findData('data-entries')
    DOM.updateTextContent(entries, "i need this")

    let item = DOM.findDataAll()
    console.log(item)
}

export default app;