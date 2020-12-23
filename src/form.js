import React, {useState} from "react";
import {Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse, 
	Form, FormControl, Nav, Navbar, Spinner, Popover } from "react-bootstrap";
import HandleForm from './handleForm.js';
function UserInput(props) {
  const [name, setName] = useState('');
  const [nameStatus, setNameStatus] = useState('');
  
  const handleInput = (evt) => {
    const name_input = {'name': name}
    evt.preventDefault();
    setNameStatus('');
    
    fetch('/api/form', {
			method: 'POST',
			body: JSON.stringify(name_input),
			headers: {
				'Content-Type': 'application/json'
			},

		})
		.then(res => res.json())
		.then(data => {
      setNameStatus(data.name_status);
    })
    console.log(nameStatus);

  } 
  return (
    <Container fluid="md" id="user-input">
        <Form>
            <h3>Enter Input</h3>
        <Form.Group controlid="createFName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name"
                            onChange= {e => setName(e.target.value)}
                            value={name}/>
        </Form.Group>
        <button type="submit" onClick={handleInput}>submit</button>
        </Form>
        <HandleForm input={nameStatus} />

    </Container>
    );
}

export default UserInput