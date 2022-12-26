function todo() {
    let todolist = [];
    function createItem(); {
        let itemId = todo.length + 1;
        return {
            id: itemId,
            title: "",
            note: "",
            dueDate: "",
            priority: "",
            check: false
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
    }
}

export default todo