import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from "./userlist/user";
import axios from 'axios';

class Carddd extends Component {
    state = {
        cards: [
            // {
            //     login: "tomjav",
            //     id: 22293854,
            //     avatar_url: "https://avatars3.githubusercontent.com/u/22293854?v=4",
            //     gravatar_id: "",
            //     url: "https://api.github.com/users/tomjav",
            //     html_url: "https://github.com/tomjav",
            //     followers_url: "https://api.github.com/users/tomjav/followers",
            //     following_url: "https://api.github.com/users/tomjav/following{/other_user}",
            //     gists_url: "https://api.github.com/users/tomjav/gists{/gist_id}",
            //     starred_url: "https://api.github.com/users/tomjav/starred{/owner}{/repo}",
            //     subscriptions_url: "https://api.github.com/users/tomjav/subscriptions",
            //     organizations_url: "https://api.github.com/users/tomjav/orgs",
            //     repos_url: "https://api.github.com/users/tomjav/repos",
            //     events_url: "https://api.github.com/users/tomjav/events{/privacy}",
            //     received_events_url: "https://api.github.com/users/tomjav/received_events",
            //     type: "User",
            //     site_admin: false,
            //     name: null,
            //     company: "Samsung R&D Poland",
            //     blog: "",
            //     location: "Warsaw",
            //     email: null,
            // }
        ]
    };

    addCard = el => {
        console.log(this);
        this.setState(prevState => ({
            cards: prevState.cards.concat(el)
        }));
    };

    removeCard = () => {
        this.setState(prevState => {
            console.log("zmieniam stan z " + prevState);
            return ({
                cards: prevState.cards.splice(0,1)
            })
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome zto React</h2>
                </div>


                <div className="container">
                    <Form addCard={this.addCard}/>
                    <DeleteButton deleteCard={this.removeCard}/>
                    <CardList cards={this.state.cards}/>
                </div>
            </div>
        );
    }
}

export default App;

class Form extends Component {
    state = {login: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event submitted: " + this.state.login);
        axios.get(`https://api.github.com/users/${this.state.login}`)
            .then(resp => {
                this.props.addCard(resp.data);
                this.setState({login: ''});
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.login} onChange={(event) => this.setState({login: event.target.value})}
                       type="text" placeholder="login"/>
                <button type="submin">Add card</button>
            </form>
        );
    }
}

class DeleteButton extends Component {
    handleDelete = () => {
        console.log("Proboje usunac element");
        this.props.deleteCard();
    };

    render() {
        return (
            <button onClick={this.handleDelete}>Remove last element</button>
        );
    }
}