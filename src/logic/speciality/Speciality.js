import React, {Component} from 'react';
import HTTP from "../../common/http";
import './Speciality.css';
import {Col, Thumbnail} from "react-bootstrap";

class SpecialityContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            specialities: []
        }
    }

    componentDidMount() {
        this.getSpecialities()
    }

    redirectToDoctors = (specName, specId) => {
        this.props.history.push(
            {
                pathname: `/doctors/${specName}`,
                state: {specialityId: specId}
            }
        );
    };

    redirectToAppointmentPropose = (specName, specId) => {
        this.props.history.push(
            {
                pathname: `/propose/appointment/${specName}`,
                state: {specialityId: specId}
            }
        );
    };

    render() {
        return (
            <div>
                {this.state.specialities.map(spec => <Speciality {...spec} key={spec.id}
                                                                 redirectToDoctors={this.redirectToDoctors}
                                                                 redirectToAppointmentPropose={this.redirectToAppointmentPropose}
                />)}
            </div>
        )
    }

    getSpecialities() {
        HTTP.get("/specialities", data => this.setState({specialities: data})
        );
    }
}

class Speciality extends Component {

    handleClickDoc = () => {
        this.props.redirectToDoctors(this.props.name.toLowerCase(), this.props.id);
    };

    handleClickApp = () => {
        this.props.redirectToAppointmentPropose(this.props.name.toLowerCase(), this.props.id);
    };

    render() {
        return (
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>{this.props.name}</h3>
                    <p>Description</p>
                    <p>
                        <button onClick={this.handleClickApp} type="button" className="btn btn-primary">Wybierz termin
                        </button>
                        <button onClick={this.handleClickDoc} type="button" className="btn">Znajdz lekarza</button>
                    </p>
                </Thumbnail>
            </Col>

        );
    }
}

export default SpecialityContainer;

