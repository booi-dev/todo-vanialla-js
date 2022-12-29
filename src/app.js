import { format } from 'date-fns'
import './todoDataList'
import "./todoEntryCreate";
import './todoEntryRead'
import "./todoEntryDelete";
import "./todoEntryView";
import PS from './PS'
import inputEntry from './inputEntry'
import DOM from './DOMquery'
// import './app.css'

function app() {
    let date = new Date()
    let dateFormated = format(date, 'dd-MMM')

    let today = DOM.findAll(".today")
    today.forEach(today => {
        today.innerText = dateFormated;
    });

    PS.trigger('renderEntries')
    inputEntry()
    let removeAll = DOM.findId("remove-all-task")
    removeAll.onclick = function () {
        PS.trigger('removeAllEntry')
        PS.trigger('delAllTodo')
    }

}

export default app;