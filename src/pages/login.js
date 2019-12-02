import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Form, Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import {Username} from '../components/username'
import {Password} from '../components/password'
import {CButton} from '../components/cbutton'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
    }

    setUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    setPassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    login() {
        this.props.setLogin(true, this.state.username);
        this.props.history.push("dashboard");
    }

    render() {
        return (
            <div><Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="#login">Login</Breadcrumb.Item>
                    <Breadcrumb.Item href="#dashboard">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>{this.props.title} - {this.props.name}</Breadcrumb.Item>
                </Breadcrumb>
                <Form>
                    <Row>
                        <Col><Username change={this.setUsername} value={this.state.username} /></Col>
                    </Row>
                    <Row>
                        <Col><Password change={this.setPassword} value={this.state.password} /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <CButton click={this.login}>Login</CButton>
                        </Col>
                    </Row>
                </Form>
            </Container>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setTitle: title => dispatch({ type: "SET_TITLE", title }),
    setLogin: (login, username) => dispatch({ type: "SET_LOGIN", login, username }),
})

const mapStateToProps = (state) => {
    const { dashboard, app } = state
    return { name: dashboard.name, title: app.title }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));