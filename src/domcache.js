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

    function updateText(element, params) {
        return element.textContent = params
    }

    function addCls(element, params) {
        return element.classList.add(params)
    }

    function setAttribute(element, attribute, params) {
        return element.setAttribute(attribute, params)
    }

    function addHtml(element, params) {
        return element.innerHtml = params;
    }

    return { findClass, findClassAll, findId, findData, findDataAll, createEl, updateText, addCls, setAttribute, addHtml }
})()

export default domcache;