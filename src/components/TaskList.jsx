import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice"
import Navbar from "./Navbar"

export default function TaskList() {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) =>{
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <Navbar tasks={tasks} />
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
