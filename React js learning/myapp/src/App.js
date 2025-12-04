import logo from './logo.svg';
import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import Register from './screens/Register';
import UserList from './screens/UserList';
import Todo from './screens/Todo';

// importing router
import { createBrowserRouter, Link } from "react-router";
import { RouterProvider } from "react-router/dom";
// using link to navigate between pages


// let's try redux
// # NPM
// npm install @reduxjs/toolkit

import { Provider } from 'react-redux'

// import { createStore } from 'redux'
// const store = createStore(rootReducer)
// dcreatestore is not used , configy=ure store is used.


// we are making this seperate file for store hence comment the below.

// import {configureStore} from '@reduxjs/toolkit'
// // const store = configureStore(rootReducer)
// import rootReducer from "./store/reducer";
// const store = configureStore({
//   reducer: rootReducer,
// }) //creating a store

// provider will be always in main file

// import store since , we moved all to store
// import store from './store/store';

// for localStorage, we need to import both store and persist value
import store, { persistor } from './store/store' // Import both from store.js
// import App from './App'
import { PersistGate } from 'redux-persist/integration/react' // Import PersistGate

// put this inside return in function
// render(
// <Provider store={store}>
//   <App />
// </Provider>,
//   document.getElementById('root')
// )


// for using context as we wrapped in countprovider, hence need to import it.
import { CountProvider } from './context/CountContext';

// here everything inside tag is like html

// app.js is main file

function App() {
  // return <h1>Hello World</h1>;
  // return <About/>; //showing about screen on this main page.

  // <h2 id="root">hello this has root as id</h2>

  // creating routes like /about, /register etc. like differenet pages we create

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <nav>
            <Link to="/register">Open register Page</Link>
            <br />
            <Link to="/userList">Open userList Page</Link>
            <br />
            <Link to="/about">Open about Page</Link>
            <br />
            <Link to="/contact">Open contact Page</Link>
            <br />
            <Link to="/todo">Open todo</Link>
            <br />
          </nav>
        </div>
      ),
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/userList",
      element: <UserList />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
  ]);


  // const root = document.getElementById("root");//it is just like javascript.//let's add this in id of some  //for now , we need to make sure such id existes.

  // using reactdom will not work here, hence avoid it.
  // ReactDOM.createRoot(root).render(
  //   <RouterProvider router={router} />,
  // );


  // for returnijg all screens
  return <div>

    {/* <RouterProvider router={router} /> */}
    {/* we are writing router provider in the main content */}


    {/* <RouterProvider router={router} /> */}
    {/* commenting so that we can use  redux and this is put in redux provider */}

    {/* //only this element is added from the router at top, we can use it as anoter scrren in the same page like iframe. */}
    {/*but a a time only one screen is shown, hence remove others  */}


    {/* after setting in route we are removing this */}
    {/* even if not removed , it will not show error. */}
    {/* <Register />
    <UserList />
    <About />
    <Contact /> */}


    {/* adding links to different pages as per route we defined but it should be added inside the pages*/}
    {/* <Link to="Register">Open register Page</Link>
    <Link to="/userList">Open userList Page</Link>
    <Link to="/about">Open about Page</Link>
    <Link to="/contact">Open contact Page</Link> */}

    {/* put this link in create browserRouter */}



    {/* for using redux, we need to put whole in provider so that all component inside gets updated value. */}

    <Provider store={store}>
      {/* <App /> */}
      {/* we have been using Router provider */}

      {/* for localStorage */}
      <PersistGate loading={null} persistor={persistor}>

        {/* now we want to get context API , wrap this content in that then all will see the changes inside this*/}

        <CountProvider>
          {/* countProvider is as per the function name we decided in context page */}
          <div></div>
          
          <RouterProvider router={router} />

          {/* whole code inside the CountProvider comes in children props. */}

        </CountProvider>

      </PersistGate>
    </Provider>,

  </div>
}

export default App;


