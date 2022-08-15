/**
 * useImperativeHandler
 * 
 * example of use case
 * 
 * While creating a component library, you may want to access
 * underling DOM elements and then forward to the consumers of the library
 */
 function CoolButton(props, ref) {
    const myBtn = useRef(null)

    // *rare use-case
    // change the behavior of the exposed ref
    useImperativeHandler(ref, () => ({
        click: () => {
            console.log('click')
            myBtn.current.click();
        }
    }))

    return <button ref={myBtn}></button> 
}

/** Forward reference to element
 * to make ref available to whoever use
 * your component library
 */
CoolButton = forwardRef(CoolButton)