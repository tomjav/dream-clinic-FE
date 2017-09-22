import React, {Component} from 'react';
import {
    Button, ControlLabel, DropdownButton, FormControl, FormGroup, Glyphicon, InputGroup, MenuItem, Nav, NavItem,
    Panel
} from "react-bootstrap";
import HTTP from "../common/http";

class AddSpec extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }


    handleusername = (n) => {
        this.setState({username: n.target.value})
    };
    handlepassword = (n) => {
        this.setState({password: n.target.value})
    };

    onAppointmentApprovalCallback = () => {
        this.props.history.push(
            {
                pathname: `/approval`,
                state: {
                    header: 'Zarejestrowano uzytkownika!',
                    content: 'xxx',
                    buttonInfo: 'Wroc do panela admina',
                    callbackPath: '/admin/panel'
                }
            }
        );
    };

    validate = () => {


    };

    handleSubmit = () => {
        let dto = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            specName: this.state.specName === undefined ? this.state.options[0] : this.state.specName
        };
        this.props.onSubmit(dto);
    };

    handleSpec = (e) => {

        this.setState({
            specName: e.target.value
        });
    };

    render() {
        return (
            <div>
                <Panel header={'Dane uzytkownika'}>
                    <form>
                        <ControlLabel>Nazwa Użytkownika</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.username}
                            placeholder="Nazwa Użytkownika"
                            onChange={this.handleusername}
                        />
                        <ControlLabel>Hasło</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.password}
                            placeholder="Hasło"
                            onChange={this.handlepassword}
                        />
                    </form>
                    <Button onClick={this.handleSubmit}>Zatwierdź</Button>
                </Panel>
            </div>);
    }
}
export default AddSpec;