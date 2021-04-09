import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from '@material-ui/core/IconButton';
import React from "react";
import axios from "axios";
import User from "./components/User";
import Follower from "./components/Follower";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: [],
      followerDetails: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/jakeas")
      .then((res) => {
        console.log("user", res.data);
        this.setState({
          ...this.state,
          userDetails: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/jakeas/followers")
      .then((res) => {
        console.log("follower", res);
        this.setState({
          ...this.state,
          followerDetails: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <header>
          <IconButton>
          <GitHubIcon fontSize="large" />
          </IconButton>
        </header>
        <h1>GitHub User Card</h1>
        <div className="container">
          
          <div className="user">
            <User userDetails={this.state.userDetails} />
          </div>
          <div className="follower">
            <Follower followerDetails={this.state.followerDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
