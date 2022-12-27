let domcache = (function () {

    function findClass(params) {
        return document.querySelector(`${params}`)
    }

    function findClassAll(params) {
        return document.querySelectorAll(`${params}`)
    }

    function findId(params) {
        return document.querySelector(`${params}]`)
    }

    function findAtt(params) {
        return document.querySelector(`${params}`)
    }

    function findAttAll(params) {
        return document.querySelectorAll(`${params}`)
    }

    function createEl(element) {
        if (!element) return
        return document.createElement(element)
    }

    return { findClass, findClassAll, findId, findAtt, findAttAll, createEl }
})()

export default domcache;