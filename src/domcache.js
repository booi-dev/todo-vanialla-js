let domcache = (function () {

    function findClass(params) {
        return document.querySelector(`.${params}`)
    }

    function findClassAll(params) {
        return document.querySelectorAll(`.${params}`)
    }

    function findId(params) {
        return document.querySelector(`#${params}]`)
    }

    function findData(params) {
        return document.querySelector(`[${params}]`)
    }

    function findDataAll(params) {
        return document.querySelectorAll(`[${params}]`)
    }

    function createEl(element) {
        if (!element) return
        return document.createElement(element)
    }

    return { findClass, findClassAll, findId, findData, findDataAll, createEl }
})()

export default domcache;