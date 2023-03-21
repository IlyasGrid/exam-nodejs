const path = require("path");
const { allTasks, Task, sortTasks } = require("../models/taskModel");

let tasks = allTasks()

const getTasks = (req, res) => {
    tasks = sortTasks();
    return res.send(tasks);

}

const addTask = (req, res) => {
    const { taskString } = req.body;
    const newTask = new Task(taskString);
    newTask.save();
    return res.status(200).json("new task added ");
}

const changePriority = (req, res) => {
    const { UPorDOWN } = req.query;

    const taskid = req.params.id;
    const task = tasks.find((t) => {
        if (t.id == taskid)
            return t;
    })
    if (!task) {
        return res.status(404).json({ "message": "task not found " });
    }

    if (UPorDOWN.toUpperCase() == "UP") {
        let theSwapTask = tasks.find((t) => {
            if (t.priority == (task.priority-1)) {
                return t;
            }
        })
        if (!theSwapTask) {
            if (task.priority != 0)
                task.priority = 0;
        } else {
            task.priority = theSwapTask.priority;
           theSwapTask.priority= theSwapTask.priority+1;
           tasks = sortTasks();
        }
    }
    // if (UPorDOWN.toUpperCase() == ("DOWN")) {
    //     let theSwapTask = tasks.find((t) => {
    //         if (t.priority == (++task.priority))
    //             return t;
    //     })
    //     if (!theSwapTask) {
    //         task.priority++;
    //     } else {
    //         theSwapTask.priority--;
    //         task.priority++;
    //     }
    // }
    return res.status(200).json(tasks);
}

const deleteTask = (req, res) => {
    const taskid = req.params.id;
    const task = tasks.find((t) => {
        if (t.id == taskid)
            return t;
    })

    if (!task) {
        return res.status(404).json({ "message": "task not found " });
    }

    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);
    tasks = sortTasks();
    return res.status(200).json({ "message": "task deleted " });
}

const ONrefresh = (req, res) => {
    tasks.length = 0;
    return res.status(200).json(tasks);
}
module.exports = { getTasks, addTask, changePriority, deleteTask, ONrefresh }