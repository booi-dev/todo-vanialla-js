let domcache = (function () {
    function findCls(params) {
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

    function createNew(element) {
        if (!element) return
        return document.createElement(element)
    }

    function updateTextContent(element, params) {
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

    return { findCls, findId, findData, findDataAll, createNew, updateTextContent, addCls, setAttribute, addHtml }
})()

export default domcache;