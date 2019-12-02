import React, { Component } from 'react' 
import { Button, Form } from 'react-bootstrap'; 

export class CButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button variant="primary" onClick={this.props.click} type="button">{this.props.children}</Button>
        );
    }
}
