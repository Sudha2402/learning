import React, { useContext } from 'react';
import { incrementByAmount } from '../store/reducer';
import store from '../store/store'; //// Use named import

import { Link } from 'react-router';

import { useSelector } from "react-redux";


// for using localStorage. //due to multiple store import it shows error.
// import {store} from '../configure/configureStore';


// for using useContext
// import React, { useContext } from 'react'; //it is already added at the top
import { CountContext } from '../context/CountContext';

function Contact() {

  // to display the result on scrren, we need to use useSelector then get value from object state

  const value = useSelector((state) => state.value);

  const countObject = useContext(CountContext);//object is taken 
  // make sure to import useContext


  // chacking the localStorage

  // Add this to see current state
  React.useEffect(() => {
    console.log("Current Redux state:", value);

    // You can also check localStorage directly
    const persistedState = localStorage.getItem('persist:root');
    console.log("LocalStorage state:", persistedState);
  }, [value]);



  return (
    <div>
      <h1>This is contact Screen</h1>
      <h2>value setted : {value} </h2>
      {/* value from countObject */}
      <h3>value from countObject : <br></br>countObject : {countObject.value} </h3>

      <button onClick={() => {
        store.dispatch(incrementByAmount(5))
        console.log("State updated");
      }
      } >
        Increase Count by 5
      </button>

      {/* globally updating the value. */}

      {/* as we are interested to see if this increment is reflected on another page like register or not. */}
      {/* for sseing on another page useSelector is must in that page but not here. */}

      <Link to="../register" > Link to register </Link>
      {/* this directory is defined in main page hence need not to worry. Overall , we see result from the App.js */}

    </div>
  )
}

export default Contact
