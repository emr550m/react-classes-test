import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Button, Form, Container, Row, Col, Breadcrumb, Modal } from 'react-bootstrap';
import { Input } from '../components/input'
import {CButton} from '../components/cbutton'
import {PopUp} from '../components/popup'

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: "",
            show: false
        };
        this.setTitle = this.setTitle.bind(this);
        this.setTitleValue = this.setTitleValue.bind(this);
        this.setName = this.setName.bind(this);
        this.setNameValue = this.setNameValue.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    setShow(value) {
        this.setState({
            show: value
        })
    }

    setTitleValue(e) {
        this.setState({
            title: e.target.value
        })
    }

    setTitle() {
        this.props.setTitle(this.state.title)
    }

    setNameValue(e) {
        this.setState({
            name: e.target.value
        })
    }

    setName() {
        this.props.setName(this.state.name)
    }

    handleClose() {
        this.props.history.push("login");
    }

    componentDidMount() {
        if (!this.props.login) {
            this.setShow(true);
        }
    }


    render() {
        return (
            <div>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#login">Login</Breadcrumb.Item>
                        <Breadcrumb.Item href="#dashboard">Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" active>{this.props.title} - {this.props.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form>
                        <Row>
                            <Col>
                                <Input title="App Title" change={this.setTitleValue} value={this.state.title} placeholder="Enter New Title" subtitle=" Please set new title." />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CButton  click={this.setTitle}>Set Title</CButton>
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col>
                                <Input title="App Name" change={this.setNameValue} value={this.state.name} placeholder="Enter New Name" subtitle=" Please set new name." />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CButton click={this.setName}>Set Name</CButton>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <PopUp title="Security Error" show={this.state.show} click={this.handleClose} close={this.handleClose}>
                    Woohoo, you need to login!
                </PopUp> 
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    setTitle: title => dispatch({ type: "SET_TITLE", title }),
    setName: name => dispatch({ type: "SET_NAME", name })
})

const mapStateToProps = (state) => {
    const { dashboard, app } = state
    return { username: app.username, login: app.login, name: dashboard.name, title: app.title }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));