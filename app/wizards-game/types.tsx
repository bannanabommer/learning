export type PlaceName = "garden" | "living-room" | "attic" | "body" | "anoubis" | "the ether"

export type Direction = "up" | "down" | "west" | "east"

export type Thing = "wiskey" | "bucket" | "chain" | "frog" | "welded bucket" | "filled bucket"

export interface Path {
  to: PlaceName
  type: "door" | "ladder",
  direction: Direction
}

export interface Place {
  name: PlaceName
  description: string
  pathes: Path[]
}

export interface ThingPlace {
  thing: Thing,
  place: PlaceName
}