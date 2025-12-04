import React from 'react'

// function Title() {
//   return (
//     <div>
//       <h1>This is about screen</h1>
//     </div>
//   )
// }

// for reusability , this component takes props

// function Title(props) {
//   return (
//     <div>
//       <h1 style={{ fontSize: 50, color: red }}>{props.name}</h1>
//       <h1 style={{ fontSize: 50, color: green }}>{props.contactNumber}</h1>
//       <h1 style={{ fontSize: 50, color: green }}>{props.schoolName}</h1>
//       <h1 style={{ fontSize: 50, color: green }}>{props.collegeName}</h1>
//       <h1 style={{ fontSize: 50, color: green }}>{props.rollNo}</h1>

//     </div>
//   )
// }


// to remove props dependency, we can use in this way
function Title( {name, contactNumber, collegeName, schoolName, rollNo } ) { //these paramenter will be passed from where title is used to display or call.
  //must wrap multiple in { }

  return (
    <div>
      <h1 style={{ fontSize: 50, color: "red" }}>{name}</h1>
      <h1 style={{ fontSize: 50, color: "green" }}>{contactNumber}</h1>

      <h1 style={{ fontSize: 50, color: "green" }}>{collegeName}</h1>
      <h1 style={{ fontSize: 50, color: "green" }}>{schoolName}</h1>
      <h1 style={{ fontSize: 50, color: "green" }}>{rollNo}</h1>

    </div>
  )
}

export default Title;
