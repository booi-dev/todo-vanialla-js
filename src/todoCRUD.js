import PS from './PS'

(function () {
    let todolist = PS.trigger('getTodo')

    function createTodo({ title }) {
        let itemId = todolist.length + 1;
        let newTodo = {
            id: itemId,
            title: title,
            note: "",
            dueDate: "",
            priority: "",
            group: "white tiger",
            check: false
        }
        console.log(newTodo)
        PS.trigger('addTodo', newTodo)
        return newTodo
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

    function delTodo(id) {


    }

    PS.sub('createTodo', createTodo)
    PS.sub('updateTodo', updateTodo)
    PS.sub('readTodo', readTodo)
    PS.sub('delTodo', delTodo)

})()

