import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    close() {
        //TODO
        this.setState({showModal: false});
    }

    render() {

        return (
            <Modal show={this.props.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.headerModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.bodyModal}
                </Modal.Body>
                <Modal.Footer>
                    {this.props.footerModal}
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalComponent;


// const popover = (
//     <Popover id="modal-popover" title="popover">
//         very popover. such engagement
//     </Popover>
// );
// const tooltip = (
//     <Tooltip id="modal-tooltip">
//         wow.
//     </Tooltip>
// );
