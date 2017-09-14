import React, {Component} from 'react';
import HTTP from "../common/http";
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

    redirectToCalendar = (id) => {
        console.log(this);
        this.props.history.push("/availability");
    }

    render() {
        return (
            <div>
                {this.state.specialities.map(spec => <Speciality {...spec} key={spec.id} redirectToCalendar={this.redirectToCalendar}/>)}
            </div>
        )
    }

    getSpecialities() {
        HTTP.get("/specialities", {},
            data => this.setState({specialities: data})
        );
    }
}

class Speciality extends Component {

    handleClick = () => {
        this.props.redirectToCalendar(this.props.id);
    };

    render() {
        return (
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>{this.props.name}</h3>
                    <p>Description</p>
                    <p>
                        <button onClick={this.handleClick} type="button" className="btn btn-primary">Wybierz termin</button>
                        <button onClick={this.handleClick} type="button" className="btn">Znajdz lekarza</button>
                    </p>
                </Thumbnail>
            </Col>

        );
    }
}

export default SpecialityContainer;

