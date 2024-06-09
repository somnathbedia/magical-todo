import { FC, useContext } from "react";
import { Itodos } from "../types/todo.type";
import { todoContext } from "../context/todoContext";
import deleteIcon from "../assets/download.png";

const TodoContent: FC<Itodos> = ({ title, completed, id }) => {
  const { updateTodo, deleteTodo } = useContext(todoContext);

  return (
    <div className="flex flex-row p-3 justify-around gap-2 w-full text-xl items-center border rounded m-1
    
    ">
      <div>
        <input
          className="w-5 h-5"
          type="checkbox"
          onChange={() => {
            updateTodo(id);
          }}
          checked={completed}
        />
      </div>

      {completed ? (
        <div>
          <p className="line-through mt-0 mb-0 text-2xl text-wrap text-center text-black">
            {title}
          </p>
        </div>
      ) : (
        <div>
          <p className="mt-0 mb-0 text-2xl text-wrap text-center ">{title}</p>
        </div>
      )}

      <div>
        <button
          className=" rounded text-white p-1 text-2xl "
          onClick={() => {
            deleteTodo(id);
          }}
        >
          <img className="w-7 h-7 " src={deleteIcon} alt="filled-trash" />
        </button>
      </div>
    </div>
  );
};

export default TodoContent;
