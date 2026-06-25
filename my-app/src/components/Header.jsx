import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();

  const token = localStorage.getItem("token");
  
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/Login')
  };
  return (
    <header className="bg-white shadow fixed w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <img src="/image.png" alt="" className='h-10' />

        <nav className="space-x-6">
          
          
         {
          token ? (
            
            <button  onClick={handleLogout}  className="bg-black text-white px-6 py-3 rounded-3xl cursor-pointer">Logout</button>
           ):(
            <>
             <a href="/login" className="bg-black text-white px-6 py-3 rounded-3xl cursor-pointer">Login</a>
            <a href="/register"className="bg-black text-white px-6 py-3 rounded-3xl cursor-pointer">Register</a>
            </>
           )

         }


        </nav>

      </div>
    </header>
  );
}

export default Header;