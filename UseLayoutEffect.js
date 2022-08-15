/**
 * useLayoutEffect
 * 
 * RUNS
 * after render but before paiting to screen
 * 
 * CAUTION
 * blocks visual updates until your callback is finished
 */
 function App() {
    const myBtn = useRef(null)

    useLayoutEffect(() => {
        const rect = myBtn.current.getBoundingClientRect();
        console.log(rect.width)
    })

    return <button ref={ref}></button>
}