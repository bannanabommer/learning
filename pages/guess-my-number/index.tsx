import { useEffect, useState } from "react"

export default function Page() {
    useEffect(() => {guessmynumber()},)
    const [lastguess, setLastGuess] = useState<null|number>(null)
    const [smallerlimit, setsmallerlimit] = useState(0)
    const [biggerlimit, setbiggerLimit] = useState(100)

    function guessmynumber(){ 
        let additionResult = (smallerlimit + biggerlimit)
        let divisionResult = additionResult / 2
        let result = Math.round( divisionResult )
        setLastGuess(result)
        return result
    }
    

    function handleSmallerClick(): void {
        console.log("small")
        if (lastguess)
            setbiggerLimit(lastguess)
        guessmynumber()
    }    

    function handleBiggerClick(): void {
        console.log('bigger')
        if (lastguess)
            setsmallerlimit(lastguess)
        guessmynumber()
    }

    return(<>
        <h1>I Guess Your Number</h1>
        <div>
            small: {smallerlimit}
            <br />
            bigg: {biggerlimit}
        </div>
        <div>your number is : {lastguess}</div>
        <div>
            <button onClick={handleSmallerClick}>smaller</button>
            <button onClick={handleBiggerClick}>bigger</button>
        </div>
    </>)
}