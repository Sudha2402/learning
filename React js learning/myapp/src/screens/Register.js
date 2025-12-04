import React from 'react'

// for seeing the global value setted in contact,js
import { useSelector } from "react-redux";

function Register() {
    function handleRegister(event) {
        event.preventDefault(); //needed to prevent repaint.
        console.log("Hello register"); //to see the live result of console, we can use an extension console ninja
    }

    let age = 19;
    let email = "sudhaKumari@gmail.com"

    // we can use data to map, map works as for loop
    // data is an array, list

    // here we can make this data seperate component


    // we are moving this data and map to userlist

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


    // for redux result seeing global value

    const value = useSelector((state) => state.value);




    return (
        // <div>
        //     <input type='email' placeholder='Enter Email' ></input>
        //     <button onClick={handleRegister}>Submit</button>

        //     {/* <button onClick={() => { }}>Submit</button> */}
        // </div>

        // using if else inside

        < div>


            <h4>Global value setted by redux in contact : {value}</h4>

            <form>
                {
                    // block in form, we will use () for wrapping as one
                    (age > 18 && email == "sudhaKumari@gmail.com") ? <div>
                        <input type='email' placeholder='Enter Email' ></input>
                        <button onClick={handleRegister}>Submit</button>
                    </div> : (<h1>Hello, you can't register. Bye dear</h1>)
                }
            </form>


            {/* <div>
                { //block
                    data.map( //map method //contains function that returns
                        ({ name, email, rollno }) => {
                            return ( // return statement bind by ( ) bracket
                                <div>
                                    <h5>{name}</h5>
                                    <h5>{email}</h5>
                                    <h5>{rollno}</h5>
                                </div>
                            )
                        }
                    )
                }
            </div> */}
        </div>

    )
}

export default Register;
