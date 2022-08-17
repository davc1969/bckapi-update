
import ButtonInvite from "./ButtonInvite";
function ButtonsHome () {
    return(
        <div>
            <br/><br/>  <br/>

        <div id="divbuttonhome" className="flex gap-7 ">
          
          <button type="button" id="btn_home" className=" transition ease-in-out delay-90  items-center justify-center  py-1.5 px-12 mr-1 mb- text-lg font-bold   text-white focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-[#282C34] dark:text-white dark:border-white dark:hover:text-dark dark:hover:bg-white-700"> <a href="/login"><i class='bx bxs-user-account'></i> Ingresar con cuenta</a></button>
            
         <ButtonInvite/>
         

        </div>
        </div>
        );
     
}

export default ButtonsHome;
