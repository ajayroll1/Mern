import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const navigate = useNavigate();

  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    navigate("/", { replace: true });
  };

  return (
    <header className="bg-white shadow fixed w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/">
          <img src="/image.png" alt="Logo" className="h-10" />
        </Link>

        <nav className="space-x-6">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-black text-white px-6 py-3 rounded-3xl cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-black text-white px-6 py-3 rounded-3xl cursor-pointer"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-black text-white px-6 py-3 rounded-3xl cursor-pointer"
              >
                Register
              </Link>
            </>
          )}
        </nav>

      </div>
    </header>
  );
}

export default Header;