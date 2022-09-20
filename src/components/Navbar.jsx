import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="pt-4 pb-4 text-center bg-slate-200 mb-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 justify-center">
        <Link
          to="/"
          class="px-4 py-2 bg-white rounded-full hover:bg-blue-600 hover:text-white font-medium">
          Home
        </Link>
        <Link
          to="/about"
          class="px-4 py-2 bg-white rounded-full hover:bg-blue-600 hover:text-white font-medium">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
