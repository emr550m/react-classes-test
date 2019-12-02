import React, { Component } from 'react' 
import {  Form } from 'react-bootstrap'; 

export class Password extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.props.change} value={this.props.value} />
        </Form.Group>
        );
    }
}
