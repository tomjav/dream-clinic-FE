import React, {Component} from 'react';
import {Nav, NavItem, Panel} from "react-bootstrap";
import HTTP from "../common/http";

class AdminOptions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 1,
            data: []
        }
    }

    componentDidMount(){
        this.getAppointmentData(this.state.active);
    }

    getAppointmentData(active){
        let patientId = Number(localStorage.getItem('id'));
        HTTP.get(`/appointment/patient/${patientId}`, e => this.setState({data: e}), {scope: active});
    }

    handleSelect = (eventKey) => {
        this.setState({active: eventKey});

        switch(eventKey){
            case 1: {
                this.props.onAddDoctor()
                break;
            }
            case 2: {
                this.props.onSeeDoctor()
                break;
            }
            case 3:{

                break;
            }
            default:{

            }
        }
    };

    render() {
        return (
                <Panel header={'Akcja admina:'}>
                    <Nav bsStyle="pills" stacked activeKey={this.state.active} onSelect={this.handleSelect}>
                        <NavItem eventKey={1} >Dodaj lekarza</NavItem>
                        <NavItem eventKey={2} >Przegladaj lekarzy</NavItem>
                        <NavItem eventKey={3} >Dodaj specjalnosc</NavItem>
                    </Nav>
                </Panel>
        );
    }
}

export default AdminOptions;