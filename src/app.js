import './todoList'
import './updateDOM'
import "./todoEntry";
import PS from './PS'
import eventBinder from './inputEntry'

function app() {
    PS.trigger('renderEntries')
    eventBinder()

}

export default app;