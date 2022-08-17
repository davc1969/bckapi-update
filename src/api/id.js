import React, { useState, useEffect } from "react";
import Modal from "../Components/Modal";



const UsersTabla = () => {
  const [list, setList] = useState([]);
  const [username, setUsername] = useState(null);
  const [mensaje, setMensaje] = useState();
  const [openModal, setOpenModal] = useState(false);
  

function Delete(username) {
  fetch(`http://localhost:5050/delete?username=${username}`, {
    method: "GET"
  })



  .then((data) => data)
  .then(window.location.reload())

}


  useEffect(() => {
    const callAPI = () => {
      fetch("http://localhost:5050", {
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
    <div>
      <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-800">
            <th class="px-16 py-2">
              <span class="text-gray-300"></span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Usuario</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Accion</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Id</span>
            </th>

            <th class="px-16 py-2">
              <span class="text-gray-300">Rol</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Status</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          {list.map((item) => (
            <tr class="bg-white border-4 border-gray-200">
              <td class="px-16 py-2 flex flex-row items-center">
                <img
                  class="h-8 w-8 rounded-full object-cover "
                  src="https://media.discordapp.net/attachments/1003720987461816320/1009182341903683656/Icono_apagar_fondo_negro.jpg?width=1202&height=676"
                  alt=""
                />
              </td>
              <td>
                <span class="text-center ml-2 font-semibold">
                  {item.username}
                </span>
              </td>
              <td class="px-16 py-2">
                
                <button onClick={() => {
                  setOpenModal(true)
                }}
                 type="sumbit" class="bg-red-700 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black">
                  Eliminar usuario
                </button>
                {openModal && <Modal Delete={() => Delete(item.username)} closeModal={setOpenModal}/>}
              </td>
              <td class="px-16 py-2">
               
                <span>{item._id}</span>
              </td>
              <td class="px-16 py-2">
                <span>{item.rol}</span>
              </td>
              <td class="px-16 py-2">
                <span class="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h5 "
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTabla;