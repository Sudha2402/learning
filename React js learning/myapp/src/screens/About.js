import React from 'react'
import Title from '../components/Title';
import UnorderedList from '../components/UnorderedList';

function About() {
    return (
        <div>
            {/* <h1>This is about screen</h1> */}
            {/* we can deivde it into components such that this is stored in tittle page present in component */}
            {/* we need to import it from there */}

            {/* <Title /> */}
            <UnorderedList />
            {/* it's simply list element with no props */}

            {/* here about screen is divided ito components that increases it's reusability of components*/}

            {/* here for component reusability, we need to use props to pass name */}

            {/* <Title name="Node Js Guide" /> */}

            {/* Now we need to pass everything */}

            <Title
                name="Node Js Guide"
                contactNumber="75433"
                collegeName="LU"
                schoolName="Lucknow"
                rollNo="115"
            />


        </div>
    )
}

export default About;
