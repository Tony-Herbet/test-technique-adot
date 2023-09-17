import { Destination, Destinations } from "."

export interface UtilsState {
  loading: boolean
}

export interface FormState {
  destinationForm: Destination | Record<string, never>
  isFormOpen: boolean

}

export interface State {
  utils: UtilsState
  destinations: Destinations
  form: FormState
}
