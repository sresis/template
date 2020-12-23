import React, {useState} from "react";
import {Button, Alert, Col, Row, Card, CardColumns, CardGroup, Container, Collapse, 
	Form, FormControl, Nav, Navbar, Spinner, Popover } from "react-bootstrap";

function HandleForm(props) {
  const name  = props.input;
  
  return (
    <div>{ name } </div>
    );
}

export default HandleForm;