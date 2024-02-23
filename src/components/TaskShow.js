import { useState, useContext } from "react";
import TasksContext from "../context/tasks";
import TaskEdit from "./TaskEdit";

function TaskShow({ task }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTaskById } = useContext(TasksContext);

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const handleClickDelete = () => {
    deleteTaskById(task.id);
  };

  const handleClickEdit = (id, newTaskName) => {
    setShowEdit(!showEdit);
  };

  let content = <h3> {task.taskName}</h3>;

  if (showEdit) {
    content = <TaskEdit task={task} onSubmit={handleSubmit} />;
  }
  return (
    <div className="task-show">
      <div>
        <img
          src={`https://picsum.photos/seed/${task.id}/300/200`}
          alt="task-photo"
        />
      </div>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleClickEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskShow;
