export interface Itodos {
    id: number,
    title: string,
    completed:boolean
}

export interface ITodoContext {
    todos: Itodos[],
    deleteTodo: (TodoId:number) => void,
    createTodo: (title: string) => void,
    updateTodo: (todoId: number) => void,
    totalTask: () => void,
    completedTask: () => void
}