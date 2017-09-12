import React from 'react';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

class CarouselComponent extends React.Component {
    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    }

    render() {
        return (
            <div style={{height: 300, margin: 20}}>
                <React_Bootstrap_Carousel
                    animation={true}
                    onSelect={this.onSelect}
                    className="carousel-fade"
                >
                    {this.props.imgs.map((img, i) => {
                        let path = "assets/img/" + img;
                        return (
                            <CarouselPicture key={i} path={path}/>
                        );
                    })
                    }
                </React_Bootstrap_Carousel>
            </div>
        )
    }
}

const CarouselPicture = (props) => {

    return (
        <div>
            <div style={{height: 300, width: "100%"}}>
                <img src={props.path} alt="xxxxxxxxxx"/>
            </div>
        </div>
    );
};


export default CarouselComponent;