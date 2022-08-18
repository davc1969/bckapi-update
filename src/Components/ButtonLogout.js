
import { useNavigate } from "react-router-dom";

   const ButtonLogout = () => {

    const navigate = useNavigate()
    function Destroy()  {
    localStorage.removeItem('token')
    localStorage.removeItem('rol')
    navigate('/login')
   }

    return(
        <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button onClick={() => Destroy()}
        class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span class="group-hover:text-gray-700">Logout</span>
        </button>
    </div>

    )
   }


 

export default ButtonLogout;