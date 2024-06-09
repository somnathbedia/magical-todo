import { createContext } from "react";
import { ITodoContext } from "../types/todo.type";

export  const todoContext = createContext<ITodoContext>({ todos: [], createTodo: () => { }, deleteTodo: () => { },updateTodo:()=>{},totalTask:()=>{},completedTask: () => {} });

