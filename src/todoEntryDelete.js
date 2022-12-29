import DOM from './DOMquery'
import PS from './PS'

(function () {
    const removeEntry = function (id) {
        console.log('remvoe entru')
        let getTargetEntry = DOM.find(`[data-item][data-id='${id}']`)
        getTargetEntry.remove()
    }

    const removeAllEntry = function name() {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.replaceChildren()
    }

    PS.sub('removeEntry', removeEntry)
    PS.sub('removeAllEntry', removeAllEntry)

})()