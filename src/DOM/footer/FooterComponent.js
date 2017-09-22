import React, {Component} from 'react';

class FooterComponent extends Component {

    render() {
        return (
            <div>
                <div class="wrapper" id="sticky-wrap">
                    <div class="content-area">
                    </div>
                </div>
                <footer>
                    <div className="navbar navbar-default">
                        <div className="container">
                            <p className="navbar-text pull-left">© 2017 - DreamClinic By Tomasz Grzybowski.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    };
}

export default FooterComponent;