# react-knowledge

## Hooks

### 1. **Usestate()**
        useState returns a pair: the current state value and a function the that  allows you to update it.

        The only argument for useState() is the initial state.

        The inital value is set useState(0);

        You can use the State Hook more than once on the same component:

        a) state object
        b) updater function (setter)
        
### 2. **Effect**

It is executed when the component has been mounted. It cannot be executed before the component is mounted.

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
