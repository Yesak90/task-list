import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function TaskCreate() {
  const [taskName, setTaskName] = useState("");
  const { addTask } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName("");
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <div className="task-create">
      <form onSubmit={handleSubmit}>
        <label>Task Name</label>
        <input className="input" onChange={handleChange} value={taskName} />
        <button className="button">Add Task</button>
      </form>
    </div>
  );
}

export default TaskCreate;
