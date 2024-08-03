//class component
//function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
   state = {
      listUsers: [
         { id: 1, name: "Duy Anh", age: "16" },
         { id: 2, name: "Akii", age: "26" },
         { id: 3, name: "Eruc", age: "69" },
      ],
   };

   handleAddNewUser = (userObj) => {
      console.log(">>Check:", userObj)
      this.setState({
         listUsers: [...this.state.listUsers, userObj]
      })
   };

   //JSX
   render() {
      return (
         <div>
            <AddUserInfor
               handleAddNewUser={this.handleAddNewUser}
            />
            <br />
            <br />

            <DisplayInfor
               listUsers={this.state.listUsers}
            />
         </div>
      );
   }
}

export default MyComponent;
