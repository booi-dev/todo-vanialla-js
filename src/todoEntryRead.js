import DOM from './DOMquery'
import PS from './PS'

(function updateDOM() {

    let todolist = PS.trigger('getTodolist', 'nothing')

    let renderEntries = function () {
        todolist.forEach(list => {
            let titleEl = PS.trigger('createEntryTodo', list)
            PS.trigger('addEntry', titleEl)
        })
    }

    PS.sub('renderEntries', renderEntries)

})()