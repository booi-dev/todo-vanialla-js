import DOM from './DOMquery'
import DELETE_BTN from './img/delete.png'
import './todoGroup.css'

(function (params) {

    let addGroupBtn = DOM.find('.add-group-btn')
    let addGroupField = DOM.find('.add-group-input-field')
    let groupCategories = DOM.find('[data-group-categories]')

    let groups = []

    // group DOM elements

    const addGroup = function (group) {
        groups.push(group)
        localStorage.setItem(`${group.id}`, JSON.stringify(group))
    }

    const removeGroupFromLS = function (id) {
        localStorage.removeItem(id)
    }

    const grpDelBtnHandler = function (e) {
        let id = e.target.dataset.groupDelId
        let groupEl = DOM.find(`[data-group-id='${id}']`)
        groupEl.remove()
        removeGroupFromLS(id)
        console.log(id)
    }

    const createGroupEl = function (group) {
        let grpDiv = DOM.createEl('div')
        let grp = DOM.createEl('h3')
        let grpDelBtn = DOM.createEl('h3')
        let delImg = DOM.createEl('img')

        grpDiv.classList.add("grp-div")
        grp.classList.add("grp-name")
        grpDelBtn.classList.add("grp-del-btn", 'hidden')

        grpDiv.setAttribute('data-group-id', group.id)
        delImg.setAttribute('data-group-del-id', group.id)

        delImg.src = DELETE_BTN

        grpDiv.addEventListener('mouseover', () => {
            grpDelBtn.classList.remove('hidden')
        })

        grpDiv.addEventListener('mouseleave', () => {
            grpDelBtn.classList.add('hidden')
        })

        delImg.addEventListener('click', grpDelBtnHandler)

        grp.innerText = group.groupName;
        grpDelBtn.append(delImg)

        grpDiv.append(grp, grpDelBtn)
        groupCategories.append(grpDiv)


        addGroupField.value = '';
    }

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let item = localStorage.getItem(key)
        let group = JSON.parse(item)

        if (group.isGroup) {
            groups.push(group)
            createGroupEl(group)
        }
    }

    console.log(groups)

    const uid = function () {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    const createGroup = function (group) {
        let id = uid()
        let newGroup = {
            id: id,
            groupName: group,
            isGroup: true
        }
        addGroup(newGroup)
        return newGroup;
    }

    // EVENT bindings

    const addGroupInputFocusHandler = function (e) {
        addGroupField.placeholder = 'Enter group name'
    }

    const addGroupInputBlurHandler = function (e) {
        addGroupField.placeholder = '+ group';
        addGroupField.value = '';
    }

    const addGroupInputHandler = function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            let group = createGroup(addGroupField.value)
            createGroupEl(group)
        }
    }

    addGroupField.addEventListener('focus', addGroupInputFocusHandler)
    addGroupField.addEventListener('blur', addGroupInputBlurHandler)
    addGroupField.addEventListener('keypress', addGroupInputHandler)

})()