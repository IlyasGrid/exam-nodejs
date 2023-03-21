const { randomUUID } = require("crypto");

const tasks = [];
tasks.push(    {
    "id": 2,
    "taskString": "nodejs exam",
    "priority": 0
})
let priorityindex = 0;

class Task {

    constructor(taskString) {
        this.id = randomUUID();
        this.taskString = taskString;
        this.priority = priorityindex;
    }


    save() {
        priorityindex++;
        tasks.push(this);
    }

    update(taskString, priority) {
        this.taskString = taskString;
        this.priority = priority;
    }

    delete() {
        const taskIndex = tasks.indexOf(this);
        tasks.splice(taskIndex, 1);
        let Newpriority = 0;
        tasks.forEach(element => {
            element.priority = Newpriority;
            Newpriority++;
        });
    }
}
const allTasks = () => {
    sortTasks()
    tasks.sort((a, b) => a.id - b.id);
    return tasks;
}
const sortTasks = () => {
    let Newpriority = 0;
    tasks.forEach(element => {
        element.priority = Newpriority;
        Newpriority++;
    });
    return tasks;
}
const findById = (id) => {
    const task = tasks.find((t) => {
        if (t.id = this.id) {
            return t;
        }
    });
    return null;
}

module.exports = { Task, allTasks, findById ,sortTasks}