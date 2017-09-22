import React, {Component} from 'react';
import CONSTANT from "../common/constants";
import './style/monthslider.css';
import {Pager} from "react-bootstrap";

class Monthslider extends Component {

    handleClick = (way) => {
        this.props.changeMonth(way);
    }
    handleClickLeft = () => this.handleClick(-1);
    handleClickRight = () => this.handleClick(1);

    render() {
        return (
            <div>
                <Pager>
                    <Pager.Item onClick={this.handleClickLeft} previous href="#">&larr; Poprzedni miesiąc</Pager.Item>
                         <span>{CONSTANT.MONTH[3]}</span>
                    <Pager.Item onClick={this.handleClickRight} next href="#">Kolejny miesiąc &rarr;</Pager.Item>
                </Pager>
            </div>
        );
    }
}

export default Monthslider;