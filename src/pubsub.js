let pubsub = (function () {
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

    function trigger(eventName, data) {
        if (!events[eventName]) return
        events[eventName].forEach((fn) => {
            fn(data)
        })
    }

    return { sub, unsub, trigger }
})()

export default pubsub;