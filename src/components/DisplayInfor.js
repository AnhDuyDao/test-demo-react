import React, { useState } from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'
// 2 cach viet cho component co state va ko co
// stateful: below
// class DisplayInfor extends React.Component {
//    render() {
//       console.log('>>> Call me render')
//       //destructuring array/object
//       const { listUsers } = this.props;// object
//       return (
//          <div className="display-infor-container">

//             {true &&
//                <>
//                   {listUsers.map((user) => {
//                      return (
//                         <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                            <div>My name's {user.name}</div>
//                            <div>My age's {user.age}</div>
//                            <div>
//                               <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
//                            </div>
//                            <hr />
//                         </div>
//                      )
//                   })}
//                </>
//             }
//          </div>
//       );
//    }
// }
//stateless: below
const DisplayInfor = (props) => {
   const { listUsers } = props;// object

   const [isShowHideListUser, setShowHideListUser] = useState(true);

   const handleShowHideListUser = () => {
      setShowHideListUser(!isShowHideListUser);
   }

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