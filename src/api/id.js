import React, { useState, useEffect } from "react";
import Modal from "../Components/Modal";
import {useNavigate} from 'react-router-dom';




const UsersTabla = () => {
  const [list, setList] = useState([]);
  const [username, setUsername] = useState(null);
  const [mensaje, setMensaje] = useState();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

function Delete(username) {
  fetch(`https://3fcb-190-247-42-95.sa.ngrok.io/delete?username=${username}`, {
    method: "GET"
  })



  .then((data) => data)
  .then(window.location.reload())
  localStorage.removeItem('token')

}

let i = 1;


  useEffect(() => {
    const callAPI = () => {
      fetch("https://3fcb-190-247-42-95.sa.ngrok.io/", {
        method: "GET"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setList(data);
        });
    };
    callAPI();
  }, []);



  return (
    <div class=" ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Usuario
                </th>
                <th scope="col" class="py-3 px-6">
                    ID
                </th>
                <th scope="col" class="py-3 px-6">
                    Rol
                </th>
                <th scope="col" class="py-3 px-6">
                    Status
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
      
        <tbody>
        {list.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.username}
                </th>
                <td class="py-4 px-6">
                  {i++}
                </td>
                <td class="py-4 px-6">
                    {item.rol}
                </td>
                <td class="py-4 px-6">
                    ✔
                </td>
                <td class="py-4 px-6 text-right">

                    <button onClick={() => {
                  setOpenModal(true)
                }} href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline">Eliminar</button>
             {openModal && <Modal username={item.username} Delete={() => Delete(item.username)}  closeModal={setOpenModal}/>}
           
                </td>
                
                
           
            </tr>
            
      ))}
        </tbody>
        
    </table>
    
</div>
  );
};

export default UsersTabla;