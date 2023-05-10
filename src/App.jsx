import { useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);

  return (
    <>
      <h1>Hello World!</h1>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
