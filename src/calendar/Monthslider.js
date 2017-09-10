import React, {Component} from 'react';
import CONSTANT from "../common/constants";

class Monthslider extends Component {

    handleClick = (way) => {
        this.props.changeMonth(way);
    }
    handleClickLeft = () => this.handleClick(-1);
    handleClickRight = () => this.handleClick(1);

    render() {
        return (
            <div>
                <span onClick={this.handleClickLeft} className='glyphicon glyphicon-circle-arrow-left'/>
                <span>{CONSTANT.MONTH[this.props.month]}</span>
                <span onClick={this.handleClickRight} className='glyphicon glyphicon-circle-arrow-right'/>
            </div>
        );
    }
}

export default Monthslider;