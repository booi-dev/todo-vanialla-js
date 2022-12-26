let todoData = function () {

    let todolist = [

        {
            id: 1,
            title: "This is first task",
            note: "I don't know what to write here.",
            dueDate: "",
            priority: "high",
            check: false
        },

        {
            id: 2,
            title: "This is second task",
            note: "I still don't know what to write here.",
            dueDate: "",
            priority: "medium",
            check: false
        },

        {
            id: 3,
            title: "This is third task",
            note: "I love dog. I love cat more.",
            dueDate: "",
            priority: "low",
            check: false
        }
    ]

    function returnDatalist(params) {
        return todolist
    }

    return returnDatalist
}

export default todoData;