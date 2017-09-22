import React, {Component} from 'react';
import {
    Button, ControlLabel, DropdownButton, FormControl, FormGroup, Glyphicon, InputGroup, MenuItem, Nav, NavItem,
    Panel
} from "react-bootstrap";
import HTTP from "../common/http";

class AdminForms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            name: "",
            surname: "",
            email: "",
            specName: "",
            options: []
        }
    }

    componentDidMount(){
        HTTP.get('/specialities', e => this.setState({options: e}));
    }

    handleusername = (n) => {
        this.setState({username: n.target.value})
    };
    handlepassword = (n) => {
        this.setState({password: n.target.value})
    };
    handlename = (n) => {
        this.setState({name: n.target.value})
    };
    handlesurname = (n) => {
        this.setState({surname: n.target.value})
    };
    handleemail = (n) => {
        this.setState({email: n.target.value})
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
            specName : this.state.specName === undefined  ? this.state.options[0] : this.state.specName
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
                </Panel>
                <Panel header={'Dane osobowe'}>
                    <form>
                        <ControlLabel>Imie</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.name}
                            placeholder="Imie"
                            onChange={this.handlename}
                        />
                        <ControlLabel>Nazwisko</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.surname}
                            placeholder="Nazwisko"
                            onChange={this.handlesurname}
                        />
                        <FormGroup>
                            <ControlLabel>Adres Email</ControlLabel>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl type="text" value={this.state.email} onChange={this.handleemail}/>
                            </InputGroup>
                        </FormGroup>
                        {this.props.isDoctor && <SelectComponent options={this.state.options} handleSpec={this.handleSpec}/>}
                    </form>
                </Panel>
                <Button onClick={this.handleSubmit}>Zatwierdź</Button>
            </div>
        );
    }
}

class SelectComponent extends Component{

    render() {
        return (
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Specializacja</ControlLabel>
                <FormControl onChange={this.props.handleSpec} componentClass="select" placeholder="select">
                    {this.props.options.map(e => <option value={e.name} key={e.id}>{e.name}</option>)}
                </FormControl>
            </FormGroup>
        );

    }
}

export default AdminForms;