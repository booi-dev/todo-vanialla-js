import DOM from './DOMquery'
import PS from './PS'

(function updateDOM() {

    let todolist = PS.trigger('getTodolist', 'nothing')

    let renderEntries = function () {
        todolist.forEach(list => {
            let titleEl = PS.trigger('createEntryTitle', list)
            PS.trigger('addEntry', titleEl)
        })
    }

    let updatePlaceHolderFocus = function () {
        let itemInput = DOM.findAtt('[data-item-input]')
        itemInput.placeholder = ' enter task title'
    }

    let updatePlaceHolderBlur = function () {
        let itemInput = DOM.findAtt('[data-item-input]')
        itemInput.placeholder = '+ add task'
    }

    PS.sub('renderEntries', renderEntries)
    PS.sub('updatePlaceHolderFocus', updatePlaceHolderFocus)
    PS.sub('updatePlaceHolderBlur', updatePlaceHolderBlur)

})()