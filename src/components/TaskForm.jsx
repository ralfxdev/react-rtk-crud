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
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
        />
        <button>{params.id ? "Update Task" : "New Task"}</button>
      </form>
    </>
  );
}
