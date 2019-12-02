import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Button, Form, Container, Row, Col, Breadcrumb } from 'react-bootstrap';

export class Username extends Component {
    constructor(props) {
        super(props); 
    } 

    render() {
        return ( <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={this.props.change} value={this.props.value} />
                            <Form.Text className="text-muted" >
                                Your Username is important. Do not share to anybody.
                            </Form.Text>
             </Form.Group> 
        );
    }
}

 