export type PlaceName = "garden" | "living-room" | "attic" | "body"

export type Direction = "up" | "down" | "west" | "east"

export type Thing = "wiskey" | "bucket" | "chain" | "frog"

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