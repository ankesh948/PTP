import { render } from '@testing-library/react';
import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';

function Home(){

    function test(){
            alert('Welcome Ankesh');
    }

    return(
        <>
            <div className="py-5">
                <h1>Welcome to Our Blog</h1>
                <button onClick={test}>Click Me</button>
            </div>
        </>
    )
}

export default Home;
