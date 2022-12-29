let domQuery = (function () {

    function find(params) {
        return document.querySelector(`${params}`)
    }

    function findAll(params) {
        return document.querySelectorAll(`${params}`)
    }

    function findId(params) {
        return document.getElementById(`${params}`)
    }

    function findclass(params) {
        return document.getElementsByClassName(`${params}`)
    }

    function findAtt(params) {
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

    return { find, findAll, findId, findclass, findAtt, findAttAll, createEl }
})()

export default domQuery;