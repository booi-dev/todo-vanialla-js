let domcache = (function () {
    // console.log("DOM cache")

    function find(params) {
        return document.querySelector(`${params}`)
    }

    function findAll(params) {
        return document.querySelectorAll(`${params}`)
    }

    function findId(params) {
        return document.getElementById(`#${params}`)
    }

    function findClass(params) {
        return document.getElementsByClassName(`.${params}`)
    }

    function createEl(element) {
        if (!element) return
        return document.createElement(element)
    }

    return { find, findAll, findId, findClass, createEl }
})()

export default domcache;