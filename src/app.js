import './todoList'
import './todoEntryRead'
import "./todoEntry";
import "./todoEntryView";
import PS from './PS'
import inputEntry from './inputEntry'

function app() {
    PS.trigger('renderEntries')
    inputEntry()





}

export default app;