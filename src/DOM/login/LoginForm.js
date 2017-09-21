import React, {Component} from 'react';
import {Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

class LoginFormComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChangeUsername = (event) => {
        this.setState({username: event.target.value});
    };

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Użytkownik
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" value={this.state.username} onChange={this.handleChangeUsername} placeholder="Wpisz nazwe uzytkownika"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Haslo
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="Wpisz haslo"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Zapamietaj mnie</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <input type="submit" value="Zaloguj" />
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default LoginFormComponent;