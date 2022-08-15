/**
 * 10 React Hooks - Fireship
 * https://youtu.be/TNhaISOUy6Q
 * 
 * useState
 * 
 * Store values into component to drive UI
 */
function App() {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
        {count}
        </button>
    )
}