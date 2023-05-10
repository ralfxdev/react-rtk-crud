import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h1>ERROR 404! NOT FOUND T-T</h1>
        <Link to={"/"}>Back</Link>
    </div>
  )
}
