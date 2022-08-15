/**
 * useContext
 * 
 * Shares data without passing props on the component tree
 */

const moods = {
    happy: '=D',
    sad: '=('
}

const MoodContext = createContext(moods)

function Header(props) {
    // this component doesn't need the mood context
    return (
        <header>
            <h1>Use Context</h1>
            {props.children}
        </header>
    )
}

function MoodEmoji() {
    // this component can catch the context without receiving through props
    const mood = useContext(MoodContext)

    return <p>{ mood }</p>
}

function App() {
    return (
        <MoodContext.Provider value={moods.happy}>
            <Header>
                <MoodEmoji />
            </Header>
        </MoodContext.Provider>
    )
}