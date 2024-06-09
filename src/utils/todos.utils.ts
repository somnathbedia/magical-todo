import { Itodos } from "../types/todo.type"

export const getTodos = () => {
    let localTodos: Itodos[] = [];

    try {
        const localStringTodos = localStorage.getItem("todos");
        if (localStringTodos) {
            localTodos = JSON.parse(localStringTodos) as Itodos[];
        }
    } catch (error) {
        console.error("Error parsing local storage todos:", error);
    }

    return localTodos;

}

export const saveToStorage = (todos: Itodos[]) => {

    localStorage.setItem("todos", JSON.stringify(todos));

}
