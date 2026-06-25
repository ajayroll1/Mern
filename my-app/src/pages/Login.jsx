import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      setMessage(data.message);

      if (data.success) {
        // Context API login
        login(data.token);

        // Redirect to Dashboard
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg w-full"
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {message && (
            <p className="text-center mb-4 font-medium">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-lg cursor-pointer"
          >
            Login
          </button>

          <p className="text-center mt-6">
            New User?{" "}
            <Link
              to="/register"
              className="text-blue-600"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;