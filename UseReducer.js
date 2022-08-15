/**
 * useReducer
 * 
 * Similar to setState, it's an Redux pattern to manage state
 */
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            throw new Error()
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, 0)

    function decrement() {
        // we could pass an paylod along
        // dispatch({ type: 'decrement', payload: 2 })
        dispatch({ type: 'decrement' })
    }

    function increment() {
        dispatch({ type: 'increment' })
    }

    return (
        <div>
            <p>{state}</p>

            <button onClick={decrement}>
                decrement
            </button>
            <button onClick={increment}>
                increment
            </button>
        </div>
    )
}