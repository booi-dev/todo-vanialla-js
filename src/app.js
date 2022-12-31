import { format, getDate, getDay, getMonth } from 'date-fns'
import './todoDataList'
import "./todoEntryCreate";
import './todoEntryRead'
import "./todoEntryDelete";
import "./todoEntryView";
import './todoGroups'
import PS from './PS'
import inputEntry from './inputEntry'
import DOM from './DOMquery'

import SYNC_ICON from "./img/sync-icon.png";

import './app.css'

function app() {
    let date = new Date()
    let currentDay = format(date, 'EEE')
    let currentDate = getDate(date)
    let currentMonth = format(date, 'MMMM')
    let dayState = format(date, 'B')
    console.log(dayState)

    let dayEl = DOM.find(".day")
    let dateEl = DOM.find(".date")
    let monthEl = DOM.find(".month")

    dayEl.innerText = currentDay;
    dateEl.innerText = currentDate;
    monthEl.innerText = currentMonth;

    let greeting = DOM.find(".greeting-time")
    if (dayState === 'in the afternoon') greeting.innerText = "Good Morning"
    if (dayState === 'in the afternoon') greeting.innerText = "Good Afternoon"
    if (dayState === 'in the evening') greeting.innerText = "Good Evening"
    if (dayState === 'in the night') greeting.innerText = "Good Night"

    let syncEl = DOM.find(".sync")
    let syncIcon = DOM.createEl('img')
    syncIcon.src = SYNC_ICON;
    syncEl.append(syncIcon)


    PS.trigger('renderEntries')
    inputEntry()
    let removeAll = DOM.findId("remove-all-task")
    removeAll.onclick = function () {
        PS.trigger('removeAllEntry')
        PS.trigger('delAllTodo')
    }






}

export default app;