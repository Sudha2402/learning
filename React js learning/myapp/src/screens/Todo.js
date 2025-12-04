import React, { useEffect } from 'react'
import './Todo.css';
import { useState } from 'react';
import { Form } from 'react-router';
import { useMemo } from 'react';

// here we will learn about Hooks like useState(), useEffect(), useMemo()
// usememory take cache so that on reloading, it does not need to calculate again.


// useeffect we will try with age. it runs on the screen render.
// Screen rendering is the process of transforming raw data, such as 3D models, animations, or video footage, into a final 2D image or video that can be displayed on a screen. 

// to check the use of useMemo, we will be needed an expensive calculation that takes time. and a function that shows it's slowness. for now we are adding a new element in array as function to show it's slowness.

// we have also used increment to show the slowness , just like we ddid in add element to  todo.  

// expensive calculation is seperate fucntion.


function Todo() {

    // let's use useState on emeil, here we will keep track of email entered.

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);

    // useState returns an array with two elements:
    // First element: current state value
    // Second element: state setter function

    // visualize
    // useState returns: [value, setterFunction]
    // const stateArray = useSate("");
    // const email = stateArray[0];
    // const setEmail = stateArray[1];

    // The issue is with how you're destructuring useState. You're using object destructuring {} instead of array destructuring [].
    // don't mistakely use {}, it is wrong

    function generalTodoCheck(event) {
        event.preventDefault();
        console.log("todo changed");
        console.log("todo changed");
        console.log("Email:", email);
        console.log("Password:", password);
    }

    //    or

    // arrow function
    // const addTodo = (parameter) => {
    // }

    // chekcing every email changes
    console.log(email);

    // useEffect(
    //     () => {
    //         setAge(13);
    //     }, [] //empty dependence array is passed.
    // );


    // now we are interested in setting the age in a fuction and useEffect just to show the console

    useEffect(
        () => {
            console.log("age : ", age); //useeffect has still taken the initial setted age, and will not change with increageAge function, hence console will show the old , and on screen is new.
            // we nned to coonect both
            // }, [] //empty dependence array is passed.
            // useeffect not know about it's depenedency. We need to pass age as it's dependency.

            // note setAge is not used here because , it keeps changing hence age will keep updating with re-render and forms infinite loop.
            // setAge(age + 1);


        }, [age]  //on passing age in dependency array of useEffect then changes will be seen continously.
        //  whenever age variable is change then screen gets rerender by useEffect.

    );

    function increaseAge(event) {
        event.preventDefault();
        setAge(age + 1);
    }



    // for showing the use of useMemo
    const [todos, setTodos] = useState([]); //todos is initially setted value
    const [count, setCount] = useState(0);

    // todos is Array - map used to access every single element and then use it to display a component or an element.

    const increment = () => {
        setCount((c) => c + 1); //as setCount is the function used with count hence , it autoatically undersatand that parameter passed is count.
    }

    const addTodo = () => {
        setTodos((t) => [...t, "New todo task is being inserted"]) //... is spread operator it means copy all present in old list and then append this also .
    };

    // expensive calculation that takes time
    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 100000000; i++) {
            num += 1;
        }

        return num; //2 - 4 second
    }

    // to reduce calculation time on every render
    // const calculation = expensiveCalculation(); //don't think paramenter is passed, it will take from 0 alsways

    // to prevent re-rendering and save the old one to make it faster
    const calculation = useMemo(
        () => expensiveCalculation(count),
        [count]

    );

    // calculation is a variable that returns or stores the count value //please do't think () => expensiveCalculation(count) is fuction, it is actually API call.

    // here count value is stored, hence dependancy paramenter has taken the value count.

    // last count value is being passed in expensiveCalculation 


    return (

        <Form>

            <h3>Age : {age} </h3>
            <button onClick={increaseAge}> Increase Age</button>
            {/* here setAge will be reflected from the useEffect */}
            <div>
                <input type='email' placeholder='email' className='form-input'
                    value={email}
                    // onChange={ ()=> {}}
                    onChange={(e) => { setEmail(e.target.value) }} //whatever value will be type will be stored in value and that is passed in this function // here setEmail is another function and it is called in the arrow function without name
                ></input>

                <p>You typed : {email}</p>

                <input type='password' placeholder='password' className='form-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} //we are just putting this for fun
                ></input>

                {/* setting password as value will automatically be filled */}

                <input type='password' placeholder='password' className='form-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} //we are just putting this for fun
                ></input>

                <button onClick={addTodo}>Submit</button>

            </div>

            <hr />
            <div>
                {/* let's show the useMemo here */}

                <div>

                    {/* first we are showing with the help of todo add element and using expensive calculation */}

                    <h3>My Todos</h3>
                    {// block for mapping , here todos is a list or arrat, hence we can use index and it's value for mapping

                        // here we are mapping the element then after inserting all elements are mapped once aggain. todos the the initially setted array.

                        todos.map(
                            (todo, index) => { //here todo is for the element in array and index is it's index value 
                                return <p key={index}> todo element listed : {todo} </p>
                            }
                        )

                    }

                    {/* button to add element */}

                    <button onClick={addTodo}> Add Todo</button>

                </div>
                <hr />
                <div>
                    {/* second , we will use increment and expensive calculation */}

                    Count : {count}
                    <button onClick={increment} > + </button>



                </div>

                {/* expensive calculation we have kept in common , otherwise it will become more slow */}

                {/* it is time taking as it do't save old result in memory */}
                <h2>Expensive Calcultation</h2>
                {/* {expensiveCalculation} */}

                {/* we are calling with the help of another variable name */}
                {calculation}
                {/* it will catch the output from function return and it is stored in calcualtion , hence it should show the result ans it is a variable whose value is being asked. */}


                {/* it is less time taking as it saves the old calculation in the result after using useMemo */}

                {/* {calculation} */}


            </div>

        </Form>
    )
}

export default Todo;
