import React from 'react'

function UserCard({ name, email, rollno }) {
   
    return (
        <div>
            {/* <Title name={name} /> */}
            <h5>name={name}</h5>
            <h5>email={email}</h5>
            <h5>roll No = {rollno}</h5>

     
        </div>
    )
}

export default UserCard;
