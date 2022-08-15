/**
 * useEffect
 * 
 * Combines componentDidMount, componentDidUpdate and componentWillUnmout
 */
function App() {
    const [loaded, setLoaded] = useState(true)

    /**
     * 
     * runs when mounted, and when state changes
     */
    useEffect(() => {
        alert('hello side effect!')
    })

    useEffect(() => {
        setLoaded(false)
        fetch().then(() => setLoaded(true))
    }, []) // Dependency array, only run once, on mount

    useEffect(() => {
        alert('hello side effect!')
    }, [loaded]) // runs every time loaded changes

    useEffect(() => {
        // clean up function, on willUnmount
        return () => alert('bye component!')
    },)

    return (
        <button onClick={() => setCount(count + 1)}>
        {count}
        </button>
    )
}