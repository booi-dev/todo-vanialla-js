import './todoDataList'
import "./todoEntryCreate";
import './todoEntryRead'
import "./todoEntryDelete";
import "./todoEntryView";
import PS from './PS'
import inputEntry from './inputEntry'
import DOM from './DOMquery'

function app() {
    PS.trigger('renderEntries')
    inputEntry()

    let removeAll = DOM.findId("remove-all-task")

    removeAll.onclick = function () {
        PS.trigger('removeAllEntry')
        PS.trigger('delAllTodo')
    }

}

export default app;