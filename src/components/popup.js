import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Button, Form, Container, Row, Col, Breadcrumb, Modal } from 'react-bootstrap';
import { Input } from '../components/input'
import {CButton} from '../components/cbutton'

export class PopUp extends Component {
    constructor(props) {
        super(props); 
    }  

    render() {
        return ( <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.children}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.click}>
                            OK
                       </Button>
                    </Modal.Footer>
                </Modal> 
        );
    }
} 