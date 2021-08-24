import React,{useState} from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'


function About(){
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [service, setService]=useState('');
    const [tnc, setTnc]=useState(false);


    function getFromData(e){
        console.log(name, email, service, tnc);
        e.preventDefault();
    }
return(
   <>
   <Container>
  
   <Row>
       <div className="py-5">
           <h1 className="py-4" style={{backgroundColor: "blue", color: 'white'}}>Form</h1>
        



       <Table striped bordered hover>
       <thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Services</th>
        <th>Terms and Condition</th>
    </tr>
  </thead>
  <thead>
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{service}</td>
        <td>{tnc ? 'true':'false'}</td>
    </tr>
  </thead>
</Table>


        <form onSubmit={getFromData} className="col-4 m-auto py-3">
            <input type="text" className="form-control mb-3" name="name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
            <input type="email" className="form-control mb-3" name="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
            <select name="web" className="form-control mb-3" id=""  onChange={(e)=>setService(e.target.value)}>
                <option>Web Developent</option>
                <option>Graphics</option>
            </select>
            <input type="checkbox" className="form-check-input mb-3" name="email" placeholder="Enter Email" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept Terms and Conditions </span>
<br />
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
       </div>
   </Row>
   </Container>
   </>
)
}

export default About;