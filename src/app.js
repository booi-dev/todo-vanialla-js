import './todoDataList'
import './todoEntryRead'
import "./todoEntryCreate";
import "./todoEntryView";
import PS from './PS'
import inputEntry from './inputEntry'
import DOM from './DOMquery'

function app() {
    PS.trigger('renderEntries')
    inputEntry()

    let removeAll = DOM.findId("remove-all-task")

    removeAll.onclick = function (params) {
        localStorage.clear()
        PS.trigger('reRenderEntries')
    }

}

export default app;