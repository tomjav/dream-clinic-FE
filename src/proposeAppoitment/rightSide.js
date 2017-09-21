import React, {Component} from 'react';


class RightSide extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        console.log(this.state.clickedDays);
        return (
            <div>
                RIGHT
            </div>
        );
    }
}

export default RightSide;