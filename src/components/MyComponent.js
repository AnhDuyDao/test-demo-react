//class component
//function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//    state = {
//       listUsers: [
//          { id: 1, name: "Duy Anh", age: "16" },
//          { id: 2, name: "Akii", age: "26" },
//          { id: 3, name: "Eruc", age: "69" },
//       ],
//    };

//    handleAddNewUser = (userObj) => {
//       console.log(">>Check:", userObj)
//       this.setState({
//          listUsers: [userObj, ...this.state.listUsers]
//       })
//    };

//    handleDeleteUser = (userId) => {
//       let listUsersClone = this.state.listUsers;
//       listUsersClone = listUsersClone.filter(item => item.id !== userId);
//       this.setState({
//          listUsers: listUsersClone
//       })
//    };

//    //JSX
//    render() {
//       return (
//          <>
//             <div className="a">
//                <AddUserInfor
//                   handleAddNewUser={this.handleAddNewUser}
//                />
//                <br />
//                <br />

//                <DisplayInfor
//                   listUsers={this.state.listUsers}
//                   handleDeleteUser={this.handleDeleteUser}
//                />
//             </div>
//             <div className="b">

//             </div>
//          </>
//       );
//    }
// }

const MyComponent = (props) => {

   const [listUsers, setListUsers] = useState(
      [
         { id: 1, name: "Duy Anh", age: "16" },
         { id: 2, name: "Akii", age: "26" },
         { id: 3, name: "Eruc", age: "69" },
      ]
   );

   const handleAddNewUser = (userObj) => {
      setListUsers([userObj, ...listUsers])
   };

   const handleDeleteUser = (userId) => {
      let listUsersClone = listUsers;
      listUsersClone = listUsersClone.filter(item => item.id !== userId);
      setListUsers(listUsersClone);
   };

   return (
      <>
         <div className="a">
            <AddUserInfor
               handleAddNewUser={handleAddNewUser}
            />
            <br />
            <br />

            <DisplayInfor
               listUsers={listUsers}
               handleDeleteUser={handleDeleteUser}
            />
         </div>
         <div className="b">

         </div>
      </>
   );
}


export default MyComponent;
