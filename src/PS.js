let PS = (function () {

    let events = {}

    function sub(eventName, fn) {
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn)
    }

    function unsub(eventName, fn) {
        if (!events[eventName]) return
        for (let i = 0; i < events[eventName].length; i++) {
            if (events[eventName][i] === fn) {
                events[eventName].splice(i, 1)
                break;
            }
        }
    }

    function trigger(eventName, args) {
        // console.log(eventName)
        if (!events[eventName]) return
        let obj
        events[eventName].forEach((fn) => {
            obj = fn(args)
        })
        return obj
    }

    return { sub, unsub, trigger, events }

})()

export default PS;