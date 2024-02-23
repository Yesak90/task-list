import { useEffect, useContext } from "react";
import TasksContext from "./context/tasks";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const { fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <TaskList />
      <TaskCreate />
    </div>
  );
}

export default App;
