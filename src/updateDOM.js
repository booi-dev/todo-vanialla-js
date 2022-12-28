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

    let itemInput = DOM.findAtt('[data-item-input]')

    let updatePlaceHolderFocus = function () {
        itemInput.placeholder = ' enter task title'
    }

    let updatePlaceHolderBlur = function () {
        itemInput.placeholder = '+ add task'
    }

    PS.sub('renderEntries', renderEntries)
    PS.sub('updatePlaceHolderFocus', updatePlaceHolderFocus)
    PS.sub('updatePlaceHolderBlur', updatePlaceHolderBlur)

})()