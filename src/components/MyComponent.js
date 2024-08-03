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

    handleOnChangeInput = (event)=>{
        this.setState({
            name: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    //JSX 
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
                    <input 
                    type="text"
                    onChange={(event)=>{this.handleOnChangeInput(event)}}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;