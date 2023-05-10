import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const tasks = useSelector((state) => state.tasks);

  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task));
      navigate("/");
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
      navigate("/");
    }
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    } else {
      setTask({
        title: "",
        description: "",
      });
    }
  }, [tasks, params.id]);

  return (
    <>
      <div className="w-4/6">
        <Navbar />
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 rounded-xl">
            <label htmlFor="title" className="block text-xs font-bold mb-2">
              Task:
            </label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={task.title}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            />
            <label htmlFor="description" className="block text-xs font-bold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              placeholder="Description"
              value={task.description}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            />
            <div className="flex justify-center">
              <button className="bg-indigo-600 px-2 py-1 rounded-md">{params.id ? "Update Task" : "New Task"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
