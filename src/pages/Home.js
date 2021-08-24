import React from 'react'
import { Row, Col, Container} from 'react-bootstrap';

function Home(){

         const [data, setData] = React.useState(true);

    return(
        <>
        <Container>
        <Row>
            <div className="py-5">
                <h1 className="py-4" style={{backgroundColor: "blue", color: 'white'}}>Hide / Show function</h1>
                {
                    data? <h3>Welcome To PTP</h3>:null
                }
                <button onClick={()=>setData(false)}>Click Me</button>
                <button onClick={()=>setData(true)}>Click Me</button>


                <button onClick={()=>setData(!data)}>Toggle</button>
            </div>
        </Row>
        </Container>
        </>
    )
}

export default Home;
