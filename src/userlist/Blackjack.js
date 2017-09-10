import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const Home = (props) => <div><p>HOME</p></div>;
const About = (props) => <div><p>ABOUT</p></div>;
const Menu = (props) => (
    <div>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/blackjack">PLAY BLACK JACK</Link></li>
        </ul>

    </div>
);

class Blackjack extends Component {

    state = {
        playerCards: [],
        croupierCards: [],

        endGame: null
    };

    overFlow(cards, newCard) {
        let sum = cards.reduce((a, b) => a + b, 0) + newCard;

        if(sum === 21){
            this.setState({
                endGame: {
                    playerWinner: true
                }
            });
        }

        return sum > 21;
    }

    pickCard = () => {

        let playerCardId = Math.floor((Math.random() * 10) + 1);
        console.log("GRACZ: Pobieram karte.." + playerCardId);

        if (this.overFlow(this.state.playerCards, playerCardId)) {
            console.log("Gracz przegral");
            this.setState({
               endGame: {
                   playerWinner: false
               }
            });
        }
        this.setState(prevState => ({
            playerCards: prevState.playerCards.concat(playerCardId),
        }));


        let croupierCardId = Math.floor((Math.random() * 10) + 1);
        console.log("KRUPIER: Pobieram karte.." + croupierCardId);

        this.setState(prevState => ({
            croupierCards: prevState.croupierCards.concat(croupierCardId)
        }));
    };

    playerWin(pCards, cCards){
        return pCards.reduce((a, b) => a + b, 0) >  cCards.reduce((a, b) => a + b, 0);
    }

    playerPass = () => {
       if(this.playerWin(this.state.playerCards, this.state.croupierCards)){
           this.setState({
               endGame: {
                   playerWinner: true
               }
           });
       }
    }

    render() {
        return (
            <div>
                { this.state.endGame ? this.state.endGame.playerWinner ? "Dobry jest!" : "HAHAHA YO MONEY" : null}
                <Croupier pickCard={this.pickCard} cards={this.state.croupierCards}/>
                <Player pass={this.playerPass} pickCard={this.pickCard} cards={this.state.playerCards}/>
                { this.state.endGame ? this.state.endGame.playerWinner ? "GRATULACJE WYGRANA" : "PRZEGRALES HAZARDZISTO!" : null}
            </div>
        );
    }
}

class Croupier extends Component {

    render() {
        return (
            <div>
                Croupier Cards
                <ul>{
                    this.props.cards.map(card => <li key={card}>{card}</li>)}
                </ul>
            </div>
        );
    }
}

class Player extends Component {

    render() {
        return (
            <div>
                Player Cards
                <ul>{
                    this.props.cards.map((card,i) => <li key={i}>{card}</li>)}
                </ul>

                <button onClick={this.props.pickCard}>Pick card</button>
                <button onClick={this.props.pass}>Pass</button>
            </div>
        );
    };
}


class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Menu/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/blackjack" component={Blackjack}/>
                </div>
            </Router>
        );
    }
}

export default App;