import { Action, Dispatch } from "redux"

export type Destination = {
    _id: string
    name: string
    address: string
    residents: string
    hotels: string
    avg_income: string
    square_kilometer: string
    img: string
    disable: boolean
}

export type Destinations = {
  destinations: Array<Destination>
}

export type DestinationOnlyProp = {
  destination: Destination
}

export interface DestinationToggleProp {
  toggleDestination: (id: string) => void
}

export interface DestinationProps extends DestinationOnlyProp, DestinationToggleProp {
  handleFormOpeningClosing: () => Dispatch<Action>
  deleteDestination: (id: string) => void
  saveDestinationForm: (destination: Destination) => Dispatch<Action>
}

export interface DestinationFirstRow extends DestinationOnlyProp  {
  handleFormOpeningClosing: () => Dispatch<Action>
  deleteDestination: (id: string) => void
  saveDestinationForm: (destination: Destination) => Dispatch<Action>
}

export interface DestinationSecondRow extends DestinationOnlyProp {
  toggleDestination: (id: string) => void
}