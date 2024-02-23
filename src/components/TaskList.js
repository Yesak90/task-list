import { useContext } from "react";
import TasksContext from "../context/tasks";
import TaskShow from "./TaskShow";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  const renderedTasks = tasks.map((task) => (
    <TaskShow key={task.id} task={task} />
  ));
  return <div className="task-list">{renderedTasks}</div>;
}

export default TaskList;
