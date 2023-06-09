import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <Navbar tasks={tasks} />
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 rounded-xl p-4">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <Link to={`/edit-task/${task.id}`} className="bg-blue-500 px-2 py-1 text-xs rounded-md">Edit</Link>
                <button onClick={() => handleDelete(task.id)} className="bg-red-500 px-2 py-1 text-xs rounded-md">Delete</button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
