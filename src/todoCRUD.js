import PS from './PS'

(function () {

    // console.log("todo CRUD")

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

    function returnTodo() {
        return todolist;
    }

    let addTodo = function (todo) {
        todolist.push(todo)
        console.log(todolist)
    }

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
        addTodo(newTodo)
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
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].id === id) {
                console.log("match")
                todolist.splice(i, 1)
            }
        }
        console.log(todolist)
    }

    // PS.sub('addTodo', addTodo)
    PS.sub('getTodolist', returnTodo)

    PS.sub('createTodo', createTodo)
    PS.sub('updateTodo', updateTodo)
    PS.sub('readTodo', readTodo)
    PS.sub('delTodo', delTodo)

})()

