import PS from './PS'

(function () {

    let todolist = []

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let todo = localStorage.getItem(key)
        todolist.push(JSON.parse(todo))
        console.log()
    }


    function returnTodo() {
        return todolist;
    }

    let addTodo = function (todo) {
        todolist.push(todo)
        localStorage.setItem(`tdls${todo.id}`, JSON.stringify(todo))
        console.log(todolist)
    }

    function createTodo({ title }) {
        let itemId = todolist.length + 1;
        let newTodo = {
            id: itemId,
            title: title,
            note: "",
            dueDate: "",
            priority: "low",
            group: "white tiger",
            check: false
        }
        addTodo(newTodo)
        return newTodo
    }

    function updateTodo(todo) {
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].id === todo.id) {
                todolist[i] = todo;
                localStorage.setItem(`tdls${todo.id}`, JSON.stringify(todo))
                PS.trigger('reRenderEntries')
            }
        }
    }

    function readTodo(id) {
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].id === id) {
                return todolist[i]
            }
        }
    }

    function delTodo(id) {
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].id === id) {
                todolist.splice(i, 1)
                // localStorage.removeItem(id)
            }
            console.log(todolist)
        }
    }

    PS.sub('addTodo', addTodo)
    PS.sub('getTodolist', returnTodo)
    PS.sub('createTodo', createTodo)
    PS.sub('updateTodo', updateTodo)
    PS.sub('readTodo', readTodo)
    PS.sub('delTodo', delTodo)

})()
