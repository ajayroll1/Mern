
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");


  const[message,setMessage]=useState("");



 const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );

  const data = await response.json();
  console.log(data);
  setMessage(data.message);

  


  
};


  return (
  <div className='flex items-center justify-center h-screen w-full'>
     <div className="flex flex-col items-center justify-center w-full">
      <h1 className='text-3xl font-bold text-center mt-10 mb-6'>
        Register
      </h1>

      <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg  w-full'>

        <div className='mb-4'>
          <label className='block mb-2 font-medium'>
            Name
          </label>

          <input
            type="text" value={name} onChange={(e)=>setName(e.target.value)}
            placeholder="enter your name"
            className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400'
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 font-medium'>
            Email
          </label>

          <input
            type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="enter your email"
            className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400'
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 font-medium'>
            Password
          </label>

          <input
            type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="enter your password"
            className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400'
          />
        </div>
        {
          message && (
            < p className="text-center font-medium mb-4">{message}</p>
          )
        }
       
        <button
          type="submit"
          className='w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700 cursor-pointer'
        >
          Register
        </button>
        <p className='text-center mt-8'>Already Registered <Link  className='text-blue-700' to={"/Login"}>Login</Link></p>
        
        


      </form>
     </div> 
  </div>
  )
}

export default Register;