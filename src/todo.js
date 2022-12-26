import PS from './pubsub'

(function () {
    let todolist = [];

    function createItem(title) {
        console.log("create item with title: " + title)
        let itemId = todolist.length + 1;
        return {
            id: itemId,
            title: title,
            note: "",
            dueDate: "",
            priority: "",
            check: false
        }
    }

    function updateItem(id, item, note, dueDate, priority, check) {
        //need more
        id: id;
        title: item;
        note: note;
        dueDate: dueDate;
        priority: priority;
        check: check
    }

    function readItem(id) {
        todolist.find((item) => {
            return item.id === id;
        })
    }

    function deleteItem(params) {

    }

    PS.sub('createEntry', createItem)
    PS.sub('updateEntry', updateItem)
    PS.sub('readEntry', readItem)
    PS.sub('deleteEntry', deleteItem)

})()

