import DOM from './DOMquery'
import PS from './PS'

(function (params) {
    function removeEntry(id) {
        let getTargetEntry = DOM.find(`[data-item][data-id='${id}']`)
        getTargetEntry.remove()
    }

    PS.sub('removeEntry', removeEntry)

})()