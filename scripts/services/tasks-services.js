import apiFetch from "./api-fetch.js";

export function getTasks() {
    return apiFetch("tasks");
}

export function createTask(newTask = {title, due_date}) {
    return apiFetch("tasks", {body: newTask});
}

export function deleteTask(id) {
    return apiFetch(`tasks/${id}`, {method: "DELETE"});
}
