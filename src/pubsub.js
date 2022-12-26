let pubsub = (function () {
    let events = {}

    function sub(eventName, fn) {
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn)
        console.log(events)
    }

    function unsub(eventName, fn) {
        if (!eventName) return
        for (let i = 0; i < events[eventName].length; i++) {
            if (events[eventName][i] === fn) {
                events[eventName].splice(i, 1)
                break;
            }
        }
        console.log(events)
    }

    return { sub, unsub }
})()

export default pubsub;