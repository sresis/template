import React, {useState} from "react";
import {Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse, 
	Form, FormControl, Nav, Navbar, Spinner, Popover } from "react-bootstrap";
function DoctorInput(props) {
  const [patients, setPatients] = useState('');
  const [times, setTimes] = useState('');
  const [kinds, setKinds] = useState('');
  const [count, setCount] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [email, setEmail] = useState('');
  // store doctor info
  var doctor_info = {

    "Hibbert, Julius" : {
        "Name": "Dr. Julius Hibbert",
        "Email": "hibbert@notablehealth.com"
    },

    "Krieger, Algernop" : {
        "Name": "Dr. Algernop Krieger",
        "Email": "krieger@notablehealth.com"
    },
    "Riviera, Nick" : {
      "Name": "Dr. Nick Riviera",
      "Email": "riviera@notablehealth.com"
    }
  }
  const handleInput = (evt) => {
    const doctor_input = {'name': evt.target.value}
    // get doctor info 
    const doc_name = doctor_info[evt.target.value]['Name'];
    const doc_email = doctor_info[evt.target.value]['Email'];
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
      setDoctorName(doc_name);
      setEmail(doc_email);
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
          <h2>{ doctorName }</h2>
          <h4>{ email }</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 0 }}>
            <div id="num-col">
              <div>#</div>
              { count }
            </div>
            <div id="patient-col">
              <div>Name</div>
              { patients }
            </div>
            <div id="time-col">
              <div>Time</div>
              { times }
            </div>
            <div id="kind-col">
              <div>Kind</div>
              { kinds }
            </div>
            </div>
        </div>
        

    </Container>
    );
}

export default DoctorInput;