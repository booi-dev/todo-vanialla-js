import PS from './pubsub'

(function () {
    let todolist = [];

    function createItem(title) {
        let itemId = todolist.length + 1;
        return {
            id: itemId,
            title: title,
            note: "",
            dueDate: "",
            priority: "",
            group: "white tiger",
            check: false
        }
    }

    function updateItem(id, title, note, dueDate, priority, check) {
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

    function deleteItem(id) {


    }

    PS.sub('createEntry', createItem)
    PS.sub('updateEntry', updateItem)
    PS.sub('readEntry', readItem)
    PS.sub('deleteEntry', deleteItem)

})()

