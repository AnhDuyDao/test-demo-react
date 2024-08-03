//class component
//function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    //JSX 
    render(){
        const myInfor = ['ab', 'c', 'c'];
        return (
            <div>
                <UserInfor/>
                <br/><br/>
                <DisplayInfor name="Hoi Dan IT" age="27" />
                <hr/>
                <DisplayInfor name="Duy Anh" age={26} myInfor={myInfor}/>
            </div>
        );
    }
}

export default MyComponent;