import { displayForm, hideForm } from './displayHandler.js';
import { refresh, showAllTasks } from './fetch.js';
import { $ } from './config.js';
import { changeBtnColorErr, createTask } from './utils.js';


showAllTasks();


$("addBtn").addEventListener('click', () => {
    if ($('form').classList.contains('hidden')) {
        displayForm();
        $("addBtn").innerHTML = "close form"
    }
    else if (!$('form').classList.contains('hidden')) {

        hideForm();
        $("addBtn").innerHTML = "add task"
    }
})
$("submitBtn").addEventListener('click', () => {
    if ($("taskStringInput").value == "") {
        changeBtnColorErr();
    }
    createTask();
    hideForm();
})
$("refreshBtn").addEventListener('click', () => {
    refresh();
    
    while ($("container").firstChild) {
        $("container").removeChild($("container").firstChild);
      }
})