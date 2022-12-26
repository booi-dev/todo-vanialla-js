import DOM from './domcache'
import PS from './pubsub'
import './todo'

function app() {
    let itemsDiv = DOM.findData('data-items')
    let itemInput = DOM.findData('data-item-input')


    let addEntry = function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            let newEntry = PS.trigger('createEntry', itemInput.value)
            let neweEntryItemEl = DOM.createEl('div')
            neweEntryItemEl.textContent = newEntry.title
            itemsDiv.append(neweEntryItemEl)
        }
    }

    let updateInputPlaceholder = function (e) {
        console.log('sdf')
    }



    itemInput.addEventListener('onchange', updateInputPlaceholder)
    itemInput.addEventListener('keypress', addEntry)

    // let getitem = PS.trigger('createEntry', 'i care')

}

export default app;