import { useContext } from "react";
import { todoContext } from "../context/todoContext";

const TodoCounter = () => {
    const {totalTask,completedTask} = useContext(todoContext)
    return (
        <div className="flex flex-row p-3 justify-between gap-2 w-full">
            <div>
                <p>{ `(Total Task: ${totalTask()})` }</p>
            </div>
            <div>
                <p>
                    {`(${completedTask()}/${totalTask()})`}
                </p>
            </div>
        </div>
    );
}

export default TodoCounter;