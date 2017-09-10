import React, {Component} from 'react';
import './App.css';
import Availability from "./calendar/Availability";

class App extends Component {

    render() {
        return (
/*            <Router>
                <div className="container">
                    <Menu/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/blackjack" component={Blackjack}/>
                </div>
            </Router>*/
            <div>
                <Availability />
            </div>
        );
    }
}

export default App;