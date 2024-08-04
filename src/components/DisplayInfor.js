import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'

//stateless: below and ussing useState() to convert stateless to stateful
const DisplayInfor = (props) => {
   const { listUsers } = props;// object

   const [isShowHideListUser, setShowHideListUser] = useState(true);

   const handleShowHideListUser = () => {
      setShowHideListUser(!isShowHideListUser);
   }

   console.log(">>Call me render");

   useEffect(
      () => {
         if (listUsers.length === 0) {
            alert('You deleted all users')
         }
         console.log(">>Call me useEffect");
      }, [listUsers]
   );

   return (
      <div className="display-infor-container">
         <div>
            <span onClick={() => handleShowHideListUser()} >
               {isShowHideListUser === true ? 'Hide list users' : 'Show list users'}
            </span>
         </div>
         {isShowHideListUser &&
            <>
               {listUsers.map((user) => {
                  return (
                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                        <div>My name's {user.name}</div>
                        <div>My age's {user.age}</div>
                        <div>
                           <button onClick={() => props.handleDeleteUser(user.id)}> Delete </button>
                        </div>
                        <hr />
                     </div>
                  )
               })}
            </>
         }
      </div>
   );

}


export default DisplayInfor;