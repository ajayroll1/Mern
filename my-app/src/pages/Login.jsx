
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[message,setMessage]=useState("");




  const navigate=useNavigate();

  const handleSubmit=async(e)=>{e.preventDefault();
    const response= await fetch("http://localhost:5001/api/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },body:JSON.stringify({
        email,
        password,
       
      })
    })
    const data = await response.json();
    setMessage(data.message)
    if(data.success)
    {
      localStorage.setItem(
        'token',data.token
      )
      navigate("/Dashboard");

    }
    

  }

  



  return (
    <>
    <h1 className='text-3xl font-bold text-center mt-10 mb-6'>Login</h1>
    <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg'>
      <div className='mb-4'>
        <label className='block mb-2 font-medium'>Email</label>
        <input type = "email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter your email " className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400'></input>
      </div>

      <div>
        <label className='block mb-2 font-medium'>Password</label>
        <input type = "password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="enter your Password " className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400'></input>
        
      </div>
      <br />
      {
        message &&(
          <p className="text-center font-medium mb-4">{message}</p>
        )
      }


      <button type="submit" className='w-full bg-black text-white px-6 py-3 rounded-lg cursor-pointer' >Login</button>

       <p className='text-center mt-8'>New User !  <Link className='text-blue-700' to={"/Register"}>Register</Link></p>

    </form>
    
    </>
    
  )
}

export default Login;
