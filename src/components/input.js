import React, { Component } from 'react'
import {  Form } from 'react-bootstrap';

export class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form.Group controlId="formBasicEmail">
                <Form.Label>{this.props.title}</Form.Label>
                <Form.Control type="text" placeholder={this.props.placeholder} onChange={this.props.change} value={this.props.value} />
                <Form.Text className="text-muted" >
                   {this.props.subtitle}
                 </Form.Text>
            </Form.Group>
        );
    }
}
