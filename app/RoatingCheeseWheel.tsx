'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function RotatingCheeseWheel({imageUrl}: {imageUrl: string}) {

    const [cheeserotation, setcheeserotation ] = useState<number>(0)

    function rotate(): void {  
        setcheeserotation (cheeserotation+45)
    }

    return (<>
      <Image 
        style={{
            transform: `rotate(${cheeserotation}deg)`
        }}
        onClick={rotate}

        src={imageUrl}
        width={225}
        height={225}
        alt="ultimate cheese"></Image>
    </>)
  }