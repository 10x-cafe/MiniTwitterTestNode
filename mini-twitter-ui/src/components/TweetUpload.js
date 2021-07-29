import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

export class TweetUpload extends Component {
  state = {
    userTextFile: null,
    tweetTextFile: null,
    tweets: null
  };

  onUserTextFileChange = (event) => {
    this.setState({ userTextFile: event.target.files[0] });
  };

  onTweetTextFileChange = (event) => {
    this.setState({ tweetTextFile: event.target.files[0] });
  };

  SetUploadResult = (result) => {
    this.props.updateDisplay(result.data);
  }

  UploadFiles = () => {
      UploadService
        .upload(this.state.userTextFile,
            this.state.tweetTextFile,
            this.SetUploadResult
            );
    }

  render() {
    return (
      <div>
        <form>
          <div className="text-center">
            <p>
              Please upload the user.txt and the tweet.txt files to see the
              tweets displayed on the screen.
            </p>
          </div>
          <div className="mb-3">
            <label className="form-label">User.txt</label>
            <input
              name="UserFile"
              className="form-control"
              type="file"
              onChange={this.onUserTextFileChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tweet.txt</label>
            <input
              name="TweetFile"
              className="form-control"
              type="file"
              onChange={this.onTweetTextFileChange}
            />
          </div>
          <div className="mb-1">
            <div
              className="form-control btn btn-primary"
              onClick={this.UploadFiles}
            >
              Upload
            </div>
          </div>
        </form>
      </div>
    );
  }
}
