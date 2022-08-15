/**
 * useMemo
 * 
 * Memoization, to cache result of function call
 * similar to Vue compute
 */
 function App() {
    const [count, setCount] = useState(0)

    const expensiveCount = useMemo(() => {
        return count ** 2
    }, [count]) // recompute when count changes

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>
            <p>{expensiveCount}</p>
        </div>
    )
}