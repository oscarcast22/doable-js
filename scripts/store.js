import { getTasks } from "./services/tasks-services.js";

async function fetchTasks () {
    const tasks = await getTasks();
    this.tasks = tasks;
};

const STORE = {
    user: null,
    tasks: [],
    fetchTasks,
};
export default STORE;