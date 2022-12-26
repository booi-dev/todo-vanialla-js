import PS from './pubsub'

(function () {

    let todolist = [

        {
            id: 1,
            title: "This is first task",
            note: "I don't know what to write here.",
            dueDate: "",
            priority: "high",
            group: "",
            check: false
        },

        {
            id: 2,
            title: "This is second task",
            note: "I still don't know what to write here.",
            dueDate: "",
            priority: "medium",
            group: "",
            check: false
        },

        {
            id: 3,
            title: "This is third task",
            note: "I love dog. I love cat more.",
            dueDate: "",
            priority: "low",
            group: "",
            check: false
        }
    ]

    function returnDatalist(params) {
        return todolist;
    }

    PS.sub('getTodoDataList', returnDatalist)

})()
