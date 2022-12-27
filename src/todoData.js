import PS from './pubsub'

(function () {

    let todolist = [

        {
            id: 1,
            title: "This is first task",
            note: "I don't know what to write here.",
            dueDate: "",
            priority: "high",
            group: "dragon",
            check: false
        },

        {
            id: 2,
            title: "This is second task",
            note: "I still don't know what to write here.",
            dueDate: "",
            priority: "medium",
            group: "tiger",
            check: false
        },

        {
            id: 3,
            title: "This is third task",
            note: "I love dog. I love cat more.",
            dueDate: "",
            priority: "low",
            group: "gate",
            check: false
        }
    ]

    let addTodo = function (todo) {
        todolist.push(todo)
        console.log(todolist)
    }

    function returnTodo() {
        return todolist;
    }

    PS.sub('addTodo', addTodo)
    PS.sub('getTodo', returnTodo)

})()
