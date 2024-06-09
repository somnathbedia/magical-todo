import { useEffect, useState } from "react";
import TodoContainer from "./components/TodoContainer";
import { todoContext } from "./context/todoContext";
import { Itodos } from "./types/todo.type";
import { getTodos, saveToStorage } from "./utils/todos.utils";

function App() {
  const [todos, setTodos] = useState<Itodos[]>(getTodos);

  useEffect(() => {
    
    const mediumDevice = window.matchMedia("(max-width: 768px)");

    if (mediumDevice.matches) {
      alert("Please open on a large window or Change to Desktop Mode!");
      deleteLocalDb();
      return;
    }
    saveToStorage(todos);
  }, [todos]);

  const deleteLocalDb = () => {
    localStorage.removeItem("todos");
  }

  const deleteTodo = (todoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const createTodo = (title: string) => {
    if (!title) {
      return;
    } else {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          title,
          completed: false,
        },
      ]);
    }
  };

  const updateTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const totalTask = () => {
    return todos.length;
  };

  const completedTask = () => {
    let count = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed === true) {
        count++;
      }
    }
    return count;
  };

  return (
    <>
      <todoContext.Provider
        value={{
          todos,
          createTodo,
          deleteTodo,
          updateTodo,
          totalTask,
          completedTask,
        }}
      >
        <TodoContainer />
      </todoContext.Provider>
    </>
  );
}

export default App;
