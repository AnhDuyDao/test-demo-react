import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//    state = {
//       name: '',
//       address: '',
//       age: '',
//    };

//    handleOnChangeName = (event) => {
//       this.setState({
//          name: event.target.value,
//       });
//    };

//    handleOnChangeAge = (event) => {
//       this.setState({
//          age: event.target.value,
//       });
//    };

//    handleOnSubmit = (event) => {
//       event.preventDefault();
//       this.props.handleAddNewUser({
//          id: Math.floor((Math.random() * 100) + 1) + '-random',
//          name: this.state.name,
//          age: this.state.age
//       });
//    };

//    render() {
//       return (
//          <div>
//             My name is {this.state.name} and I'm {this.state.age}
//             <form
//                onSubmit={(event) => {
//                   this.handleOnSubmit(event);
//                }}
//             >
//                <label>Your name: </label>
//                <input
//                   value={this.state.name}
//                   type="text"
//                   onChange={(event) => {
//                      this.handleOnChangeName(event);
//                   }}
//                />
//                <label>Your age: </label>
//                <input
//                   value={this.state.age}
//                   type="text"
//                   onChange={(event) => {
//                      this.handleOnChangeAge(event);
//                   }}
//                />
//                <button>Submit</button>
//             </form>
//          </div>
//       );
//    }
// }

const AddUserInfor = (props) => {

   const [name, setName] = useState('');
   const [address, setAdress] = useState('Ha Noi');
   const [age, setAge] = useState('');

   const handleOnChangeName = (event) => {
      setName(event.target.value);
   };

   const handleOnChangeAge = (event) => {
      setAge(event.target.value);
   };

   const handleOnSubmit = (event) => {
      event.preventDefault();

      props.handleAddNewUser({
         id: Math.floor((Math.random() * 100) + 1) + '-random',
         name: name,
         age: age
      });
   };
   return (
      <div>
         My name is {name} and I'm {age}
         <form
            onSubmit={(event) => {
               handleOnSubmit(event);
            }}
         >
            <label>Your name: </label>
            <input
               value={name}
               type="text"
               onChange={(event) => {
                  handleOnChangeName(event);
               }}
            />
            <label>Your age: </label>
            <input
               value={age}
               type="text"
               onChange={(event) => {
                  handleOnChangeAge(event);
               }}
            />
            <button>Submit</button>
         </form>
      </div>
   );
}


export default AddUserInfor;
