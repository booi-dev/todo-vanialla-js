import PS from './PS'

(function () {
    let todolist = [];

    function createTodo({ title }) {
        // console.log(title)
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

    function updateTodo(id, title, note, dueDate, priority, check) {
        //need more
        id: id;
        title: title;
        note: note;
        dueDate: dueDate;
        priority: priority;
        check: check
    }

    function readTodo(id) {
        todolist.find((item) => {
            return item.id === id;
        })
    }

    function deleteTodo(id) {


    }

    PS.sub('createTodo', createTodo)
    PS.sub('updateTodo', updateTodo)
    PS.sub('readTodo', readTodo)
    PS.sub('deleteTodo', deleteTodo)

})()

