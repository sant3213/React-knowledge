import "./App.css";
import React from "react";

const testData = [
  {
    name: "Pedro",
    company: "Endava",
  },
  {
    name: "Andrea",
    company: "Globant",
  },
  {
    name: "Checho",
    company: "Hotmart",
  },
];
// Function Component
const CardList = (props) => (
  <div>
    {props.profiles.map((profile, i) => (
      <Card {...profile} key={i} />
    ))}
  </div>
);

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <input type="text" placeholder="testing input"></input>
        <button>Add input value</button>
      </form>
    );
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div>
        <img src="https://www.fillmurray.com/640/360" alt="profile" style={{width: '150px', height:'100px'}}/>
        <div>
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  // constructor
  // this

  render() {
    return (
      <div>
        <div
          style={{
            fontWeight: "bold",
            color: Math.random() < 0.5 ? "green" : "blue",
            textAlign: 'center',
            marginTop: 10
          }}
        >
          {this.props.title}
          <Form />
        </div>
        <CardList profiles={testData}/>
      </div>
    );
  }
}

export default App;
