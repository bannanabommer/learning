console.log("WHAAAAT? WIZARD?")

let playerlocation = "living-room"


const living_room_location = { name: "living-room", description: "you are the living-room. a wizard is snorring loud on the couch." }
const garden_location = { name: "garden", description: "you are in a beatiful garden. there is a well in front of you. " }
const attic_location = { name: "attic", description: "you are in the attic. there is a giant welding torch. " }

const locations = [ living_room_location, garden_location, attic_location ]

const living_room_passes = {
    from: "living-room",
    pathes:[
        {
            to: "garden",
            type: "door",
            direction: "west",
         },
         {  to: "attic",
            type:  "ladder",
            direction: "up the stairs",
        }
    ]
}
const garden_passes = {
    from: "garden",
    pathes: [ 
        {
            to: "living-room",
            type: "door",
            direction: "east",
        }
    ]
}
const attic_passes = {
    from: "attic",
    pathes: [
        {
            to: "living-room",
            type: "ladder",
            direction: "down",
        }
    ]
}
const passes = [living_room_passes, garden_passes, attic_passes]


function discribelocation(locationToDescribe)
{
    for(const location of locations) {


        if (location.name === locationToDescribe) {
            return location.description;
        }
    }
}

function describepath(path) {
    return `there is a ${path.type} going ${path.direction} from here`
}

function discribepathes(location) {
    for(const path of passes){
        if (path.from === location ){
           return path.pathes.map(describepath).join('. ') 
        }
    }
}

const thinglocations = [
    {thing: "wiskey",
     location: "living-room"},
     
     {thing: "bucket",
     location: "living-room"},

     {thing: "chain",
     location: "garden"},

    { thing: "frog",
     location: "garden"},
]

function thingsat (thinglocation){
    return thinglocations.filter((tl) => tl.location === thinglocation).map((tl) => tl.thing)
}

function discribethings(location) {

    const things = thingsat(location)
    
    const sentences = things.map((thing) => ` you see a ${thing} on the floor `)
    
    const result = sentences.join('and ')
    
    return result
}
function look (){

    const locationdesc = discribelocation(playerlocation)
    
    const thingsdesc = discribethings(playerlocation)

    const pathesdesc = discribepathes(playerlocation)

    return locationdesc + thingsdesc + pathesdesc
     
}
function walk (direction){
  const playerpath = passes.find ((chickenplane) => chickenplane.from === playerlocation)
  const path = playerpath.pathes.find ((chickenplane)=> chickenplane.direction === direction)
  playerlocation = path.to
  return look() 
}