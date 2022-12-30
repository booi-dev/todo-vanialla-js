import { format } from 'date-fns'

import PS from './PS'

(function () {

    let date = new Date()
    let dateFormated = format(date, 'dd-MMM')

    let todolist = []

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let item = localStorage.getItem(key)
        let todo = JSON.parse(item)
        if (todo.isTodo) {
            todolist.push(todo)
        }

    }

    const returnTodo = function () {
        return todolist;
    }

    const addTodo = function (todo) {
        todolist.push(todo)
        localStorage.setItem(`${todo.id}`, JSON.stringify(todo))
        console.log(todo.title)
    }

    const uid = function () {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    const createTodo = function ({ title }) {
        let id = uid()
        let newTodo = {
            id: id,
            title: title,
            note: "",
            dueDate: dateFormated,
            priority: "medium",
            group: "dragon",
            check: false,
            isTodo: true
        }
        addTodo(newTodo)
        return newTodo
    }

    const updateTodo = function (todo) {
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].id === todo.id) {
                todolist[i] = todo;
                localStorage.setItem(`${todo.id}`, JSON.stringify(todo))
                PS.trigger('reRenderEntries')
                console.log(todolist[i])
            }
        }
    }

    const readTodo = function (id) {
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].id === id) {
                return todolist[i]
            }
        }
    }

    const delTodo = function (id) {
        for (let i = 0; i < todolist.length; i++) {
            if (todolist[i].id === id) {
                console.log(id)
                todolist.splice(i, 1)
                localStorage.removeItem(id)
            }
        }
    }

    const delAllTodo = function (params) {
        localStorage.clear()
        console.log("local storage cleared")
    }

    PS.sub('addTodo', addTodo)
    PS.sub('getTodolist', returnTodo)
    PS.sub('createTodo', createTodo)
    PS.sub('updateTodo', updateTodo)
    PS.sub('readTodo', readTodo)
    PS.sub('delTodo', delTodo)
    PS.sub('delAllTodo', delAllTodo)

})()
