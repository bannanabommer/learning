'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function GuessMyNumber() {
    useEffect(() => {guessmynumber()},)
    const [lastguess, setLastGuess] = useState<null|number>(null)
    const [smallerlimit, setsmallerlimit] = useState(0)
    const [biggerlimit, setbiggerLimit] = useState(10000)

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

    return(
    <>
        <div className="grid grid-cols-3 gap-3">
            <div></div>

            <div>
                <h1 className ="font-bold text-5xl"   >I Guess Your Number</h1>
                <div>your number is : {lastguess}</div>
            </div>
            
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div className="grid grid-cols-2 gap-2">
                <Button type="button" onClick={handleSmallerClick}>smaller</Button>
                <Button type="button" onClick={handleBiggerClick}>bigger</Button>
            </div>
        </div>
    </>)
}