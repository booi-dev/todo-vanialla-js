import DOM from './DOMquery'
import PS from './PS'

(function () {
    const removeEntry = function (id) {
        let getTargetEntry = DOM.find(`[data-entry][data-entry-id='${id}']`)
        getTargetEntry.remove()
    }

    const removeAllEntry = function name() {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.replaceChildren()
    }

    PS.sub('removeEntry', removeEntry)
    PS.sub('removeAllEntry', removeAllEntry)

})()