import React, {Component} from 'react';
import {Link} from "react-router-dom";
import LoginComponent from "../login/LoginComponent";
import LoggedAsSomeone from "../login/LoggedAsSomeone";
import HTTP from "../../common/http";

class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            menu: []
        }

    }

    handleLoggenIn = (status) => {

        let iUsername = localStorage.getItem('username');
        this.setState({logged: status});

        if (status) {
            HTTP.get("/menu", e => {
                this.setState({
                    menu: e
                });
            }, {username: iUsername});
        } else {
            window.location.replace("http://localhost:3000/");
        }
    };



    componentDidMount() {
        let iUsername = localStorage.getItem('username');
        if (iUsername) {
            HTTP.get("/menu", e => {
                this.setState({
                    menu: e
                });
            }, {username: iUsername});
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-home"></span></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Strona główna</Link>
                        </li>
                        {this.state.menu.map((m, i) => <Position path={m.path} name={m.name} key={i}/>)}
                    </ul>
                    {localStorage.getItem('token') === null &&
                    <LoginComponent handleLoggenIn={this.handleLoggenIn}/>
                    }
                    {localStorage.getItem('token') !== null &&
                    <LoggedAsSomeone handleLoggenIn={this.handleLoggenIn}/>
                    }
                </div>
            </nav>
        );
    }
    ;
}

export default MenuComponent;


const Position = (props) => {
        return (
            <li>
                <Link to={props.path}>{props.name}</Link>
            </li>
        );
    };