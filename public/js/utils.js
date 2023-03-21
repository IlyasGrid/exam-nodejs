import { $, urlApi } from "./config.js";
import { postTask } from "./fetch.js";


const changeBtnColorErr = () => {
    $("submitBtn").style.backgroundColor = "red";
    console.log("empty inputs");
    setTimeout(() => {
        $("submitBtn").style.backgroundColor = "#fff";
    }, 3000)
    return
};

const createCards = (data) => {
    const divCard = document.createElement('div');
    const div = document.createElement('div');
    const divBtn = document.createElement('div');

    const h2 = document.createElement('h2');
    const button = document.createElement('button');
    const up = document.createElement('button');
    const down = document.createElement('button');

    divCard.classList.add("card");

    const { taskString } = data;

    h2.innerText = taskString + "";
    button.innerText = "delete"
    up.innerText = "up"
    down.innerText = "down"

    divBtn.appendChild(up)
    divBtn.appendChild(down)
    div.appendChild(h2)
    div.appendChild(button)

    divCard.appendChild(div);
    divCard.appendChild(divBtn)

    button.addEventListener('click', async () => {
        const response = await fetch(urlApi + "task/" + data.id, { method: "DELETE" })
        if (response.ok)
            return divCard.remove();
        alert("can't delete todo")
    })
    up.addEventListener('click', async () => {
        const response = await fetch(urlApi + "task/" + data.id + "?UPorDOWN=UP", { method: "Put" })
        if (response.ok)
            return
    })
    down.addEventListener('click', async () => {
        const response = await fetch(urlApi + "task/" + data.id + "?UPorDOWN=DOWN", { method: "PUT" })
        if (response.ok)
            return
    })

    $("container").appendChild(divCard)

}





const createTask = () => {
    const taskInput = $('taskStringInput').value;
    const task = {
        taskString: taskInput,
    }
    postTask(task);
}


export { createCards, createTask, changeBtnColorErr };