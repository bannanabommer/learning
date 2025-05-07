'use client'

import { useEffect, useState } from "react"

export default function Matrix() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            /// OUR MATRIX FUNCTION GOES HERE
        setrolingmatrix([...rollingmatrix, 'Z'])
            

            ///
        }, 500)
        return () => clearTimeout(timeoutId)
    })
    const [rollingmatrix, setrolingmatrix  ] = useState<string[]>(['Z', 'Z', 'Z'])

    return (       
     <>
        {rollingmatrix.map((character) => (
            <div>{character}</div>
        ))}
        </>
        )
}