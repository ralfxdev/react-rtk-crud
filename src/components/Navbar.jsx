import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export default function Navbar({ tasks }) {
  const params = useParams();

  return (
    <header>
      <h1>TODO</h1>
      {tasks ? <h3>Total Tasks {tasks.length}</h3> : <h3>{params.id ? "Update a new task" : "Create a new task"}</h3>}
      <Link to={"/"}>Tasks List</Link>
      <Link to={"/create-task"}>New Task</Link>
    </header>
  );
}

Navbar.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    })
  ),
};
