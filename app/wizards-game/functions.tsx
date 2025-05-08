import { Path, Place, PlaceName, Thing, ThingPlace } from "./types";

function discribeplace(placename: PlaceName, places: Place[]): string | undefined {
  for(const place of places) {

      if (place.name === placename){
          return place.description
      }
  }
}

function discribepath(path: Path): string {
  return `there is a ${path.type} going ${path.direction} from here`
}

function discribepathes(placename: PlaceName, places: Place[]): string | undefined {
    for(const place of places) {
        if (place.name === placename) {
           return place.pathes.map(discribepath).join('. ') 
        }
    }
}

function thingsat(placename: PlaceName, thingplaces: ThingPlace[]): Thing[] {
  return thingplaces.filter((tp) => tp.place === placename).map(tp => tp.thing)
}

function discribethings(placename: PlaceName, thingplaces: ThingPlace[]): string {

  const things: string[] = thingsat(placename, thingplaces)
  
  const sentences: string[] = things.map((thing) => ` you see a ${thing} on the floor `)
  
  const result: string = sentences.join('and ')
  
  return result
}

function get(thing: Thing, thingplaces: ThingPlace[]): ThingPlace {
  return thingplaces.find ((chickenplane)=> chickenplane.thing === thing)!
}

function have(thing: Thing, thingplaces: ThingPlace[]){
  
  const thingplace = get(thing, thingplaces)

  return thingplace.place === "body"
  
}

function weld (thingplaces: ThingPlace[]){
  console.log("welding")
  const bucketplace = get ("bucket", thingplaces)
  const chainplace = get ("chain", thingplaces)
  const weldedbucket = get ("welded bucket", thingplaces)
  
  bucketplace.place = "anoubis"
  chainplace.place = "anoubis"
  weldedbucket.place ="body"
} 


function fill (thingplaces: ThingPlace[]){
const filledbucket = get ("filled bucket", thingplaces)
const weldedbucket = get ("welded bucket", thingplaces)
weldedbucket.place = "anoubis"
filledbucket.place = "body"
}

function promptTheEnd(thingplaces: ThingPlace[]): string{
  
  if (have ("frog", thingplaces)){ return "the wizard wakes up and calls you a thief an you explode"}
  else {return "the wizard wakes up and gives you a ultimate piece of cheese"}
  

}

export {
  discribeplace,
  discribepathes,
  thingsat,
  discribethings,
  have,
  weld,
  fill,
  promptTheEnd
}