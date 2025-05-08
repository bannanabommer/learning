import { Place, ThingPlace } from "./types";

export const places: Place[] = [
  {
      name: "living-room",
      description: "you are the living-room. a wizard is snorring loud on the couch.",
      pathes: [
          {
              to: "garden",
              type: "door",
              direction: "west"
          },
          {  to: "attic",
             type:  "ladder",
             direction: "up",
          }
      ]
  },
  {
      name: "garden",
      description: "you are in a beatiful garden. there is a well in front of you.",
      pathes: [
          {
              to: "living-room",
              type: "door",
              direction: "east",
          }
      ]
  },
  { 
      name: "attic", 
      description: "you are in the attic. there is a giant welding torch.",
      pathes: [
          {
              to: "living-room",
              type: "ladder",
              direction: "down",
          }
      ]
  },
{
  name:"the ether",
  description: "the end ",
pathes: []
}
]

export const thingplaces: ThingPlace[] = [
  { thing: "wiskey",
    place: "living-room"},
    
  { thing: "bucket",
    place: "living-room"},

  { thing: "chain",
    place: "garden"},

  { thing: "frog",
    place: "garden"},

  { thing: "welded bucket" ,
    place: "anoubis" },

    { thing: "filled bucket",
      place: "anoubis" }, 


] 