import React from 'react';
import UserCard from '../components/UserCard';
import data  from '../utils/data';

// userlist will take the data and use it for mapping in usercard

function UserList() {

    // we can make component of this

    // let data = [
    //     { //it is a block in list
    //         name: "Sudha",
    //         email: "sudhakumari@gmail.com",
    //         rollno: "12",
    //     },
    //     {
    //         name: "Sana",
    //         email: "sanakumari@gmail.com",
    //         rollno: "10",
    //     },
    //     {
    //         name: "Shanaya",
    //         email: "shanayakumari@gmail.com",
    //         rollno: "10",
    //     },

    // ]

    return (
        <div>
            { //block
                data.map( //map method //contains function that returns
                    // it takes an arrow function with return 
                    ({ name, email, rollno }) => {
                        
                      return <UserCard name={name} email = {email} rollno={rollno} />
                    }
                )
            }
        </div>
    )
}

export default UserList;
