import React, {Component} from 'react';
import './TopBarComponent.css'
class TopBarComponent extends Component {

    render() {
        return (
            <div className="topbar container-fluid text-center home-header">
                <div className="col-md-2 col-md-offset-5">
                </div>
                <div className="col-md-2 col-md-offset-3">
                    <current-user></current-user>
                </div>
                <h3>DreamClinic</h3>
                <p>Nawet chorowac mozna przyjemnie!</p>
            </div>

        );
    };
}

export default TopBarComponent;