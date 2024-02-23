import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function TaskEdit({ task, onSubmit }) {
  const [taskName, setTaskName] = useState(task.taskName);
  const { editTaskById } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editTaskById(task.id, taskName);
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <div className="task-edit">
      <form onSubmit={handleSubmit}>
        <label>New Name</label>
        <input onChange={handleChange} value={taskName} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskEdit;
