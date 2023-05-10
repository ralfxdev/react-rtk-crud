import { useSelector } from "react-redux"

export default function TaskList() {

  const tasks = useSelector(state => state.tasks)

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}
