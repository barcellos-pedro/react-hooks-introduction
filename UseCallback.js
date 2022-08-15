/**
 * 10 React Hooks - Fireship
 * https://youtu.be/TNhaISOUy6Q
 * 
 * useState
 * 
 * Memoization, to cache entire function
 * ideal to when we need to pass the same function to multiple child components
 */
 function App() {
    const [count, setCount] = useState(60)

    // Prevents unnecessary re-render of children
    // since they are usign the same function object
    const showCount = useCallBack(() => {
        alert(`Count ${count}`)
    }, [count]) 

    return <SomeChild handler={showCount} />
}