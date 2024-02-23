import { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3002/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const addTask = async (taskName) => {
    const response = await axios.post("http://127.0.0.1:3002/tasks", {
      taskName,
    });
    const updatedTask = [...tasks, response.data];
    setTasks(updatedTask);
  };

  const editTaskById = async (id, newTaskName) => {
    const response = await axios.put(`http://127.0.0.1:3002/tasks/${id}`, {
      taskName: newTaskName,
    });
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://127.0.0.1:3002/tasks/${id}`);

    const updatedTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTask);
  };
  const valueToShare = {
    deleteTaskById,
    editTaskById,
    addTask,
    fetchTasks,
    tasks,
  };

  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
