//class component
//function component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Duy Anh',
        address: 'Ha Noi',
        age: 25
    };

    handleClick (event) {
        console.log(">>>Click me my button");
        
        this.setState({
            name: 'Akii',
            age: Math.floor((Math.random()*100)+1)
        });

        // this.setState({
        //     age: Math.floor((Math.random()*100)+1)
        // });
    }

    handleOnMoverOver(event){
        // console.log(event);
    }

    //JSX 
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={(event)=>{this.handleClick(event)}}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;