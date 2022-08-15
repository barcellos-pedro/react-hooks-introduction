/**
 * useRef
 * 
 * Mutable value that does not re-render UI
 */
function App() {
    const count = useRef(0)

    // we can use to grab native HTML elements from JSX
    const myBtn = useRef(null)
    const clickIt= () => myBtn.current.click()

    return (
        // in this case the count value will always stay '0'
        // since the change doesn't trigger an update
        <div>
            <button onClick={() => count.current++}>
                {count.current}
            </button>

            <button ref={myBtn}></button>
        </div>
    )
}