import { Destination } from "."

export type ActionApp = Record<string, never> |  
  {
    ['type']: string,
    ['destinations']?: Array<Destination>
    ['destinationForm']: Destination
  }