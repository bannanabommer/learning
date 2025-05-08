'use client'

import { useEffect, useState } from "react"
import { Direction, Place, PlaceName, Thing } from "./types"
import { discribepathes, discribeplace, discribethings, fill, have, thingsat, weld } from "./functions"
import { places, thingplaces } from "./constants"
import { Button } from "@/components/ui/button"

export default function WizardGame() {
  const [playerlocation, setplayerlocation] = useState<PlaceName>("living-room")
  const [prompt, setPrompt] = useState<string>("")
  const [inventory, setInventory] = useState<Thing[]>([])
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
    setInventory(thingsat("body", thingplaces))
  }

  function canWeld() {
    return have("bucket", thingplaces) 
        && have("chain", thingplaces)
        && !have("welded bucket", thingplaces) 
        && playerlocation === "attic"
  }

  function weldInAttic() {
    weld(thingplaces)
    setInventory(thingsat("body", thingplaces))
  }

  function can_fill(){
    return have("welded bucket", thingplaces) 
    && !have("filled bucket", thingplaces) 
    && playerlocation === "garden"
  }
  function fillingarden(){
    fill(thingplaces)
    setInventory(thingsat("body", thingplaces))
  }

  return (
    <>
      <div className="mx-auto w-[50%]">
        <div className="">
          <h1 className="font-bold text-5xl mb-5">Wizard Game</h1>
          <div className="grid grid-cols-4 gap-y-4 gap-x-1" >
            <div  className="col-span-3">{prompt}</div>
            <div className="border-black border-3 border-solid px-2 min-h-48">
              <h2 className="font-semibold">inventory</h2>
              <ul>
                {inventory.map(thing => (
                  <li key={thing}>{thing}</li>
                ))}
              </ul>
            </div>
            <div className= "border-black border-2 col-span-2 p-2">
              <p>walk</p>
              <div className="grid grid-cols-2 gap-2">
                {currentPlace().pathes.map(path => (
                  <Button key={path.direction} onClick={() => walk(path.direction)}>{path.direction}</Button>
                ))}
              </div>       
            </div>
            <div className="border-black border-2 col-span-2 p-2">
              <p>actions</p>
              <div className="grid grid-cols-2 gap-2">
                {thingsat(playerlocation, thingplaces).map(thing => (
                  <Button key={thing} onClick={() => pick_up(thing)}>
                    Pick up {thing}
                  </Button>
                ))}
                {canWeld() 
                  ? (<Button key={'weld'} onClick={weldInAttic}>Weld</Button>)
                  : <></>}
                {can_fill() 
                  ? (<Button key={'fill'} onClick={fillingarden}>fill bucket</Button>)
                  : <></>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}