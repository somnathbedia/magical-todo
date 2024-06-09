import { useContext, useEffect } from "react";
import TodoContent from "./TodoContent";
import TodoCounter from "./TodoCounter";
import TodoHeader from "./TodoHeader";
import { todoContext } from "../context/todoContext";
import { saveToStorage } from "../utils/todos.utils";

const TodoContainer = () => {
  const { todos } = useContext(todoContext);

  useEffect(() => {
    saveToStorage(todos);
  }, [todos]);

  return (
    <div
      className="flex flex-col justify-center items-center mt-20 border-2 w-1/3 ml-auto mr-auto p-2 
    "
    >
      <TodoHeader />

      {todos.map((todo) => {
        return (
          <TodoContent
            id={todo.id}
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        );
      })}

      <TodoCounter />
    </div>
  );
};

export default TodoContainer;
