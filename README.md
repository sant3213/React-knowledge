# react-knowledge

### 1. **useState()**
        <p>
        useState returns a pair: the current state value and a function the that  allows you to update it.

        The only argument for useState() is the initial state.

        The inital value is set useState(0);

        You can use the State Hook more than once on the same component:

        a) state object
        b) updater function (setter)
        </p>

- In a class component, the state is algo managed on the in-memory instance that React associates with every mounted component. To initialize s state object for the App component, we need to tap into the native class constructor method, which gets called for every instantiated object. 
This specual constructor method receives the instance props as well, it has to call the javascript super() method. Super() method is needed to honor the link between the App class and the class that it extends from (React.Component). You should always pass the props object to the super method.


```js script
     constructor(props) {
          super(props);
      }
```

- Once inside the constructor, we have access to the special state object that React manages for each class component.

```js script
class App extends Reac.Component {
     constructor(props) {
          super(props);
          this.state = {
            profiles: testData
          }; //it has to be an object in class components
      }
      render() {
        return (
          <div>
          <div>{this.props.title}</div>
          <Form/>
          <CardList profiles={this.state.profiles}/>
        )
      }
}
```
- We can usa another syntax without using the constructor call:

```js script
class App extends Reac.Component {
     state = {
       profiles: testData
     };
      render() {
        ...
      }

```

### 2. **Effect**

It is executed when the component has been mounted. I cannot be executed before the component is mounted.

We can execute it when a variable or state is updated.
<pre>
    <code>
    useEffect(()=> {
        // ...code to execute...
    }, [variables that we want useeffect to detect when it is executed again])
    </code>
</pre>

### 3. **React Components**
Class components has two main concepts: 

  1) Constructor
   2) this

   - Each React Component must have a render function.
   - A class can have as many functions as needed, but the render function in a React component is the only function that is required. You make the render function return the virtual DOM description of your Component.
   - Instead of receiving props as arguments, in class components, both the props and the state are managed on an instance of the class and each instance of the class that you create gets its props and state.

**index.js file**
```js script
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title='React class component title'/>
  </React.StrictMode>
);
```
   **App.js file**
```js script
    class App extends React.Component {

     render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <Card/>
            </div>
            );
        }
    } 
```

   - For multiline (meaning having multiples components call in one) return should have parenthesis and be wrapped between  
   **`<div> `**<br />
      &nbsp; &nbsp;`<ComponentOne/>`<br />
      &nbsp; &nbsp;`<ComponentTwo/>`<br />
      **`</div>`**  
   or   
   **`<React.Fragment>`**<br />
      &nbsp;&nbsp;` <ComponentOne/>`<br />
      &nbsp;&nbsp;` <ComponentTwo/>`<br />
      **` </React.Fragment>`** 

     or   
   **`<>`**<br />
      &nbsp;&nbsp;` <ComponentOne/>`<br />
      &nbsp;&nbsp;` <ComponentTwo/>`<br />
   **`</>`**

  
- To iterate creating Components, it can be done with:
```js script
  { props.profiles.map((profile, i) => (
      <Card {...profile} key={i} />
    ))}
```
 &nbsp; &nbsp; &nbsp; &nbsp; This is the as doing  **`[<Card/>, <Card/>] `** and **`[React.createElement(), React.createElement()]`** 

 ### 3. **Forms**
- One way of getting the value from an input is using **ref={}** property from React. It is used to get a reference from the DOM element. React keeps it in-memory and asscociates with every rendered element.
It is initialized with **variableName = React.creatRef();**.
To get the value we use **variableName.current.value**.

```js script
 class Form extends React.Component {
  userNameInput = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault(); // Avoid refreshing the page when submitting
    console.log(this.userNameInput.current.value)
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="testing input"
          ref={this.userNameInput}
        ></input>
        <button>Add input value</button>
      </form>
    );
  }
}
```

- This is another method to get the values to control their values directly through React itself, rather than reading it from the DOM elements. It has more advantages over the simple ref property.
The benefict of using it it that React is aware of this state change for every single character, while previously React was not aware of what was being typed in the input box.
This method is valuable if you need to provide some kind of feedback for the user as the user is typing. For example: Password strength indicator or email validator.

```js script
class Form extends React.Component {
  state = { userName: ''}
  handleSubmit = (event) => {
    event.preventDefault(); // Avoid refreshing the page when submitting
    console.log(this.state.userName)
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
```