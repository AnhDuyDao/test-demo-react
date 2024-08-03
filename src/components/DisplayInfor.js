import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { listUsers } = this.props;// object
        console.log(listUsers);
        return (
            <div>
                { listUsers.map((user) => {
                    
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr/>
                        </div>
                    )
                })}
                {/* <div>My name's Eruc</div>
                <div>My age's 111</div>
                <hr/>
                <div>My name's Eruc</div>
                <div>My age's 111</div>
                <hr/>
                <div>My name's Eruc</div>
                <div>My age's 111</div>
                <hr/> */}
            </div>
        )
    }
}

export default DisplayInfor;