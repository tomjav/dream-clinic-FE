import React, {Component} from 'react';

// const Card = (props) => {
//     console.log(props);
//     return (
//         <div className="col-3">
//             <div className="card" width={100} height={200}>
//                 <img className="card-img-top"
//                      src={props.avatar_url}
//                      alt="Brak obrazu"/>
//                 <div className="card-block">
//                     <p className="card-text">{props.login}</p>
//                     <p className="card-text">{props.id}</p>
//                 </div>
//                 <div className="card-footer">
//                     <small className="text-muted">{props.company}</small>
//                 </div>
//             </div>
//         </div>
//     );
// }

class Card extends Component{

    componentDidMount() {
        console.log(`Zamontowano nowy element!\nLogin:${this.props.login}`);
    };
    componentWillUnmount() {
        console.log(`Wymontowano element!\nLogin:${this.props.login}`);
    };

    render(){
        return (
            <div className="col-3">
                <div className="card" width={100} height={200}>
                    <img className="card-img-top"
                         src={this.props.avatar_url}
                         alt="Brak obrazu"/>
                    <div className="card-block">
                        <p className="card-text">{this.props.login}</p>
                        <p className="card-text">{this.props.id}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{this.props.company}</small>
                    </div>
                </div>
            </div>
        );
    }
}


const CardList = (props) => {
    return (
        <div className="row">
            {props.cards.map(card => <Card {...card} key={card.id}/>)}
        </div>
    );
};

export default CardList