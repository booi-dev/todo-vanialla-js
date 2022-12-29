import DOM from './DOMquery'
import PS from './PS'

(function updateDOM() {

    let todolist = PS.trigger('getTodolist', '')

    let renderEntries = function () {
        todolist.forEach(list => {
            let titleEl = PS.trigger('createEntryTodo', list)
            PS.trigger('addEntry', titleEl)
        })
    }

    let reRenderEntries = function (params) {
        let titleEntryDiv = DOM.findAtt('[data-todo-items]')
        titleEntryDiv.replaceChildren()
        renderEntries()
    }


    PS.sub('renderEntries', renderEntries)
    PS.sub('reRenderEntries', reRenderEntries)

})()