import React, { useEffect, useState } from "react";
import AddUser from "./addUser";
import EditUser from "./editUser";
const AllUser = (props: any) => {

   const [users, setUsers] = useState([])
   const [isEdit, setIsEdit] = useState(false);
   const [userEdit, setuserEdit] = useState({});
   useEffect(() => {
      refreshData()
      console.log('ref useEffect')
   }, [])

   const refreshData = () => {
      let js = sessionStorage.getItem("users") ?? "";
      let allUsers = js.length > 0 ? JSON.parse(js) : null;

      setUsers(allUsers);
      console.log('ref', isEdit)
   }
   const deleteUser = (ind: any) => {
      let js = sessionStorage.getItem("users") ?? "";
      let tempusers = js.length > 0 ? JSON.parse(js) : null;
      tempusers.splice(ind, 1);
      console.log(tempusers)
      sessionStorage.setItem("users", JSON.stringify(tempusers));
      setUsers(tempusers);
   }
   const editUser = (ind: any) => {
     
      setuserEdit({ user: users[ind], index: ind });
      setIsEdit(true);
   }
   const handleUpdate = () => {
      setIsEdit(false);
      refreshData()
   }
   const handleAdd = () => {

      refreshData()
   }

   return <>
      <div>  <AddUser handleAdd={handleAdd}></AddUser><br/></div>

      {users && users.length == 0 && <>
         No Record Found
      </>}
      {users && users.length > 0 && <>
         <table border={1}>
            <thead>
               <tr>
                  <th>name</th>
                  <th>age</th>
                  <th>action</th>
               </tr>
            </thead>
            <tbody>


               {users && users.length > 0 && users.map((e: any, i: any) => {

                  return <>
                     <tr key={i}>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td><button onClick={() => { editUser(i) }}>Edit</button>

                           <button onClick={() => deleteUser(i)}>Delete</button>
                        </td>
                     </tr>
                     
                  </>
               })}


            </tbody>

         </table>
         {isEdit && userEdit && <div>
            <EditUser item={userEdit} handleUpdate={handleUpdate}></EditUser>
         </div>
         }
      </>
      }
   </>

}
export default AllUser;