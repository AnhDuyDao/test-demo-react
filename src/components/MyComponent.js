//class component
//function component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Duy Anh',
        address: 'Ha Noi',
        age: 25
    };

    //JSX 
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;