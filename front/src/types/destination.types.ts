export type Destination = {
    _id: string
    name: string
    address: string
    resident: string
    hotels: string
    avg_income: string
    square_kilometer: string
    img: string
    disable: boolean
}

export type Destinations = {
  destinations: Array<Destination>
}

export type DestinationProp = {
  destination: Destination
}