import './todoCRUD'
import './updateDOM'
import PS from './PS'
import eventBinder from './eventBinder'

function app() {
    PS.trigger('renderEntries')
    eventBinder()

}

export default app;