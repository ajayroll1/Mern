import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
// import Skeleton from "../components/Skeleton";

function Dashboard() {
  const token = localStorage.getItem("token");

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);

  const handleToggle = async (item) => {
    const response = await fetch(`http://localhost:5001/api/todo/${item._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        task: item.task,
        isCompleted: !item.isCompleted,
      }),
    });

    const data = await response.json();
    if (data.success) {
      getTodo();
    }
  };

  const currentTodos = todo.slice((page - 1) * 5, page * 5);
  const getTodo = async () => {
    const response = await fetch("http://localhost:5001/api/todo/my-todos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log(response.status);
    }

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setTodo(data.data);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/api/todo/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        task,
      }),
    });

    if (!response.ok) {
      console.log(response.status);
    }

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setTask("");
      getTodo();
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5001/api/todo/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log(response.status);
    }

    const data = await response.json();
    console.log(data);

    if (data.success) {
      getTodo();
    }
  };

  const handleEdit = async (id, oldTask) => {
    const updatedTask = prompt("Update your task", oldTask);

    if (!updatedTask) return;

    const response = await fetch(`http://localhost:5001/api/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        task: updatedTask,
      }),
    });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    const data = await response.json();

    if (data.success) {
      getTodo();
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 pt-24">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center gap-2 mb-8"
        >
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
            className="bg-white w-96 h-12 px-4 rounded-xl border outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 rounded-3xl cursor-pointer"
          >
            Add Task
          </button>
        </form>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-4">
          {todo.length === 0 ? (
            <p className="text-center text-gray-500">No Todos Found</p>
          ) : (
            currentTodos.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b py-3"
              >
                <span>{item.task}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item._id, item.task)}
                    className="bg-yellow-400 text-white px-4 py-1 rounded-lg cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg cursor-pointer"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleToggle(item)}
                    className={`px-4 py-1 rounded-lg text-white cursor-pointer ${item.isCompleted ? "bg-green-500" : "bg-gray-500"}`}
                  >
                    {item.isCompleted ? "completed" : "pending"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center items-center gap-3 mt-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="bg-black text-white px-4 py-2 rounded-3xl cursor-pointer"
          >
            Prev
          </button>

          <span className="font-bold text-lg">{page}</span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page * 5 >= todo.length}
            className="bg-black text-white px-4 py-2 rounded-3xl cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
