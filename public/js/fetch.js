import { urlApi } from "./config.js"
import { createCards } from "./utils.js";


const showAllTasks = async () => {
    const data = (await fetch(urlApi + "task/"))
    const tasks = await data.json();
    console.log(tasks);

    tasks.forEach(element => {
        createCards(element)
    });
}



const postTask = async (task) => {

    const response = await fetch('/task', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    console.log(response.json())
    return response;
}
const refresh = async () => {

    const response = await fetch('/task/refresh');
    console.log(response.json())
    return response;
}
const deleteTask = async (id) => {
    const data = await fetch(urlApi + "task/" + id, { method: "delete" });
    console.log(response.json())
    return response.json();
}

export { showAllTasks, postTask, deleteTask,refresh }