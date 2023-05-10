import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export default function Navbar({ tasks }) {
  const params = useParams();

  return (
    <>
      <h1 className="text-6xl text-center mb-4">TODO</h1>
      <header className="flex justify-between items-center py-4 mb-4">
        {tasks ? (
          <h3 className="bg-white px-2 py-1 rounded-md text-md text-black">
            Total Tasks {tasks.length}
          </h3>
        ) : (
          <h3>{params.id ? "Update a new task" : "Create a new task"}</h3>
        )}
        <Link to={"/"} className="bg-indigo-600 px-2 py-1 rounded-md text-md">
          Tasks List
        </Link>
        <Link
          to={"/create-task"}
          className="bg-indigo-600 px-2 py-1 rounded-md text-md"
        >
          New Task
        </Link>
      </header>
    </>
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
