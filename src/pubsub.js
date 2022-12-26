export default (function pubsub() {
    let events = {}

    function sub(subName, fn) {
        events[subName] = events[subName] || [];
        events[subName].push(fn)
        console.log(events)
    }

    return { sub }
})()