# react-knowledge

## Hooks

### 1. **Usestate()**
        <p>
        useState returns a pair: the current state value and a function the that  allows you to update it.

        The only argument for useState() is the initial state.

        The inital value is set useState(0);

        You can use the State Hook more than once on the same component:

        a) state object
        b) updater function (setter)
        </p>
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
