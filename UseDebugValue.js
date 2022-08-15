/**
 * useDebugValue
 * 
 * Usually good to use with custom hook
 * You can create custom labels to see
 * in the component tree inside React DevTools
 */
function App() {
    const displayName= useDisplayName();

    return <p>{displayName}</p>
}

/**
 * Custom Hook
 */
function useDisplayName() {
    const [displayName, setDisplayName] = setState()
    
    useEffect(() => {
        const data = fetchSomeData('url')
        setDisplayName(data.displayName)
    }, [])

    // The param passed will be the label shown in the ReactDevTools
    useDebugValue(displayName ?? 'loading...')

    return displayName
}