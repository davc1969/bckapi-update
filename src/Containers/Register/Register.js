import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
      username: "",
      contraseña: "",
    });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);
  
  
  
    const { username, contraseña } = inputs;
  
    const HandleChange = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      if (username !== "" && contraseña !== "") {
        const Usuario = {
          username,
          contraseña
        };
        setLoading(true);
        await axios
        .post("http://localhost:4000/register", Usuario)
          .then((res) => {
            const { data } = res;
            setMensaje(data.mensaje);
            setInputs({ username: "", contraseña: "" });
            setTimeout(() => {
              setMensaje("");
              navigate("/login");
            }, 2000);
          })
          .catch((error) => {
            console.error(error);
            setMensaje("Hubo un error");
            setTimeout(() => {
              setMensaje("");
            }, 2000);
          });
  
        setLoading(false);
      }
    };
    return(
<div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
<div  class="w-full p-6 m-auto bg-white border-t-4 border-neutral-600 rounded-md shadow-md border-top lg:max-w-md">
  <h1 class="text-3xl font-semibold text-center text-neutral-700 ">BCKAPI</h1>
  <form  onSubmit={(e) => onSubmit(e)} className="mt-6">
    <div>
      <label for="email" class="block text-sm text-gray-800">Usuario</label>
      <input  className="block w-full px-4 py-2 mt-2 text-neutral-700 bg-white border rounded-md focus:border-neutral-400 focus:ring-neutral-300 focus:outline-none focus:ring focus:ring-opacity-40"
                   onChange={(e) => HandleChange(e)}
                  value={username}
                  name="username"
                  id="username"
                  type="text"
                  autoComplete="off"/>
     
    </div>
    <div class="mt-4"/>
      <div>
        <label for="password" class="block text-sm text-gray-800">Contraseña</label>
        <input  className="block w-full px-4 py-2 mt-2 text-neutral-700 bg-white border rounded-md focus:border-neutral-400 focus:ring-neutral-300 focus:outline-none focus:ring focus:ring-opacity-40"
          onChange={(e) => HandleChange(e)}
         value={contraseña}
         name="contraseña"
         id="contraseña"
         type="password"
         autoComplete="off"/>
         
      </div>
    
      <div class="mt-6">
        <button
           type='sumbit' class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-neutral-700 rounded-md hover:bg-neutral-600 focus:outline-none focus:bg-neutral-600">
          Registrarse
        </button>
        {mensaje  &&  <div className="absolute right-0 top-0 m-5">
          <div class="flex items-center text-lime-600 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2">

<div class="text-green-500 rounded-full bg-white mr-3">
  <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
  </svg>
</div>

<div class="text-white max-w-xs ">
 {mensaje }
</div>
</div></div>}

      </div>
  </form>
  <p class="mt-8 text-xs font-light text-center text-gray-700"> Ya tienes cuenta? <a href="/login"
      class="font-medium text-black hover:underline">Login</a></p>
</div>
</div>
    );
    
}

export default Register;
