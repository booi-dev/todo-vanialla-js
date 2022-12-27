let domcache = (function () {
    // console.log("DOM cache")

    function find(params) {
        return document.querySelector(`${params}`)
    }

    function findAll(params) {
        return document.querySelectorAll(`${params}`)
    }

    function findId(params) {
        return document.querySelector(`${params}`)
    }

    function findAtt(params) {
        // console.log(params)
        return document.querySelector(`${params}`)
    }

    function findAttAll(params) {
        console.log(params)
        return document.querySelectorAll(`${params}`)
    }

    function createEl(element) {
        if (!element) return
        return document.createElement(element)
    }

    return { find, findAll, findId, findAtt, findAttAll, createEl }
})()

export default domcache;