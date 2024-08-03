//class component
//function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers:[
            {id:1, name:"Duy Anh", age:"30"},
            {id:2, name:"Akii", age:"16"},
            {id:3, name:"Eruc", age:"69"},
        ]
    }
    
    //JSX 
    render(){
          
        return (
            <div>
                <UserInfor/>
                <br/><br/>

                <DisplayInfor 
                listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;