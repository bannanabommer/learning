'use client'

import { useEffect, useState } from "react"
import { Direction, Place, PlaceName, Thing } from "./types"
import { discribepathes, discribeplace, discribethings, thingsat } from "./functions"
import { places, thingplaces } from "./constants"
import { Button } from "@/components/ui/button"

export default function WizardGame() {
  const [playerlocation, setplayerlocation] = useState<PlaceName>("living-room")
  const [prompt, setPrompt] = useState<string>("")
  useEffect(() => setPrompt(look()), [playerlocation])
  
  function look() {
    const placedesc = discribeplace(playerlocation, places)
    const thingsdesc = discribethings(playerlocation, thingplaces)
    const pathesdesc = discribepathes(playerlocation, places)
    return [placedesc, thingsdesc, pathesdesc].join(' ')
  }

  function currentPlace(): Place {
    return places.find(place => place.name === playerlocation)!
  }

  function walk(direction: Direction) {
    const path = currentPlace().pathes.find((chickenplane) => chickenplane.direction === direction)
    setplayerlocation(path!.to)
  }

  function pick_up(thing: Thing) {
    const mything = thingplaces.find((chickenplane) => chickenplane.thing === thing)! 
    mything.place = "body"
    setPrompt(look())
  }

  function inventory() {
    return thingsat("body", thingplaces)
  }

  return (
    <>
      <div>{prompt}</div>
      <div>
        <p>walk</p>
        <div>
          {currentPlace().pathes.map(path => (
            <Button key={path.direction} onClick={() => walk(path.direction)}>{path.direction}</Button>
          ))}
        </div>       
      </div>
      <div>
        <p>actions</p>
        <div>
          {thingsat(playerlocation, thingplaces).map(thing => (
            <Button key={thing} onClick={() => pick_up(thing)}>
              Pick up {thing}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <p>inventory</p>
        <ul>
          {inventory().map(thing => (
            <li key={thing}>{thing}</li>
          ))}
        </ul>
      </div>
    </>
  )
}