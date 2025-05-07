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

export {
  discribeplace,
  discribepathes,
  thingsat,
  discribethings
}