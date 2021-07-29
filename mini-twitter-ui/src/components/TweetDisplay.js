import React, { Component } from "react";

export class TweetDisplay extends Component {
    state = {
        users: [],
        usersBlocks: []
    }

    componentWillReceiveProps(props) {
        this.setState({ users: props.users })
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    
    render() {
        var final = [];
        this.state.users.forEach( user => {
            var tweets = [];
            user.userFeed.forEach(tweet => {
                tweets.push(
                    <li key={this.uuidv4()} className="list-group-item"><span className="bold-text">@{tweet.user}</span>: {tweet.message}</li>
                );
            });
            final.push(
                <div key={this.uuidv4()} className="card col-12 text-center">
                    <div className="card-body">
                        <h5 className="card-title">@{user.name}</h5>
                        <ul className="list-group list-group-flush">
                            {tweets}
                        </ul>
                    </div>
                </div>
            );
        });
        return <div className="col-12">{final}<br/></div>;
    }
}
