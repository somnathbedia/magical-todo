import { useContext, useState } from "react";
import { todoContext } from "../context/todoContext";

const TodoHeader = () => {
  const [title, setTitle] = useState("");
  const { createTodo } = useContext(todoContext);

  return (
    <div className="flex gap-1 flex-row justify-between w-full p-3">
      <div className="flex-1">
        <input
          className="p-2 w-full"
          type="text"
          placeholder="Enter your task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (title == "") {
              return;
            }

            if (e.key === "Enter") {
              createTodo(title);
              setTitle("");
            }
          }}
          value={title}
        />
      </div>
      <div>
        <button
          className="p-2 bg-purple-700 w-20 text-white rounded"
          onClick={() => {
            createTodo(title);
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;
