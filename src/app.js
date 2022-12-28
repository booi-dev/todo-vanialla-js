import './todoCRUD'
import './updateDOM'
import "./todoEntry";
import './todoEntryView'
import PS from './PS'
import eventBinder from './eventBinder'

function app() {
    PS.trigger('renderEntries')
    eventBinder()

}

export default app;