import React, {useState} from "react";
import {Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse, 
	Form, FormControl, Nav, Navbar, Spinner, Popover } from "react-bootstrap";
function DoctorInput(props) {
  const [name, setName] = useState('');
  const [patients, setPatients] = useState('');
  const [times, setTimes] = useState('');
  const [kinds, setKinds] = useState('');
  const [count, setCount] = useState('');

  const handleInput = (evt) => {
    const doctor_input = {'name': evt.target.value}
    console.log(doctor_input);
    console.log(evt.target.value);
    evt.preventDefault();
    
    fetch('/api/get-patients', {
			method: 'POST',
			body: JSON.stringify(doctor_input),
			headers: {
				'Content-Type': 'application/json'
			},

		})
		.then(res => res.json())
		.then(data => {
      const all_patients = [];
      const all_times = [];
      const all_kinds = [];
      const all_counts = [];
      var curr_count = 0;
      for (const row of data) {
        all_patients.push(
          <div>{row.Patient}</div>
          );
        all_times.push(
          <div>{row.Appt_Time}</div>
          );
        all_kinds.push(
          <div>{row.Kind}</div>
          );
        curr_count += 1;
        all_counts.push(
          <div>{curr_count}</div>
          );

      }
      setPatients(all_patients);
      setTimes(all_times);
      setKinds(all_kinds);
      setCount(all_counts);
    })
  } 
  return (
    <Container fluid="md" id="app-container">
        <Form id="doctor-input">
          <h3>Physicians</h3>
          <div>
            <Button value="Hibbert, Julius" onClick={handleInput}>Hibbert, Julius</Button>

          </div>
          <div>
            <Button value="Krieger, Algernop" onClick={handleInput}>Krieger, Algernop</Button>
          </div>
          
          <Button value="Riviera, Nick" onClick={handleInput}>Riviera, Nick</Button>
        </Form>
        <div id="schedule">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
            <div id="num-col">#
              { count }
            </div>
            <div id="patient-col">Name
              { patients }
            </div>
            <div id="time-col">Time
              { times }
            </div>
            <div id="kind-col">Kind
              { kinds }
            </div>
            </div>
        </div>
        

    </Container>
    );
}

export default DoctorInput;