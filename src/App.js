import "./App.css";
import React from "react";
import axios from 'axios';

// Github usernames: gaearon, sophiebits, sebmarkbage, bvaughn
// Function Component
const CardList = (props) => (
  <div>
    {props.profiles.map((profile, i) => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

class Form extends React.Component {
  state = { userName: ''}
  handleSubmit = async (event) => {
    event.preventDefault(); // Avoid refreshing the page when submitting
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data)
    this.setState({userName: ''})
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="testing input"
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
        ></input>
        <button>Add input value</button>
      </form>
    );
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div style={{marginLeft: 30}}>
        <img
          src="https://www.fillmurray.com/640/360"
          alt="profile"
          style={{ width: "150px", height: "100px" }}
        />
        <div>
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };
addNewProfile = (profileData) => {
  this.setState( prevState => ({
    profiles: [...prevState.profiles, profileData]
  }))
  console.log('App', profileData)
}
  render() {
    return (
      <div>
        <div
          style={{
            fontWeight: "bold",
            color: Math.random() < 0.5 ? "green" : "blue",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {this.props.title}
          <Form onSubmit={this.addNewProfile}/>
        </div>
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
