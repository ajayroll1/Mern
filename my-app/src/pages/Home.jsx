import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100">
        <section className="text-center py-20">
          {/* <h1 className="text-5xl font-bold mb-4 leading-normal  ">
            Manage Your Tasks Efficiently
          </h1> */}
          <style>
            {`
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 45%;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: orange;
      }
    }
  `}
          </style>

          <h1
            className="
    text-5xl
    font-bold
    leading-normal
    py-2

    md:overflow-hidden
    md:whitespace-nowrap
    md:border-r-4
    md:border-orange-500
    md:w-0
    md:inline-block
    md:animate-[typing_3.5s_steps(40,end)_forwards,blink-caret_.75s_step-end_infinite]
  "
          >
            Manage Your Tasks Efficiently
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Organize your daily work, track progress, and boost productivity
            with our Todo App.
          </p>

          <div className="space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg  ">
              Get Started
            </button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 pb-20">
          <div className="bg-white p-6 rounded-lg shadow hover:bg-blue-200">
            <h2 className="text-xl font-semibold mb-2">Create Tasks</h2>
            <p>Create and organize your daily tasks.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:bg-blue-200">
            <h2 className="text-xl font-semibold mb-2">Update Tasks</h2>
            <p>Edit and manage tasks anytime.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:bg-blue-200">
            <h2 className="text-xl font-semibold mb-2">Delete Tasks</h2>
            <p>Remove completed or unwanted tasks.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:bg-blue-200">
            <h2 className="text-xl font-semibold mb-2">Secure Access</h2>
            <p>Protected with JWT Authentication.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
