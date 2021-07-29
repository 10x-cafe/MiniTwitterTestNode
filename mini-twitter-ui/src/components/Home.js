import React, { Component } from 'react';
import { TweetUpload } from './TweetUpload';
import { TweetDisplay } from './TweetDisplay';

export class Home extends Component {

  state = {
    showUploadForm: true,
    showTweetDisplay: false,
    users: null,
    displayRendered: false
  }

  ToggleUploadForm = () => {
    let newState = !this.state.showUploadForm;
    this.setState({showUploadForm: newState});
  }

  updateDisplay = (data) => {
    this.setState({users:data});
    this.setState({displayRendered: true});
    this.setState({showTweetDisplay: true});
    this.ToggleUploadForm()
  }
  render () {
    const showUploadForm = this.state.showUploadForm;
    return (
      <div>
          <div className="text-center">
              <h1 className="display-4">Welcome To The MiniTwitter Demo</h1>
          </div>
          {showUploadForm ? <TweetUpload updateDisplay={this.updateDisplay}></TweetUpload> : null }
          <TweetDisplay displayRendered={this.state.displayRendered} users={this.state.users}></TweetDisplay>
      </div>
    );
  }
}
