import { Action, Dispatch } from "redux";
import { Destination, Destinations } from ".";

export interface AppProps {
  destinations: Array<Destination>,
  saveDestinations: (destinations: Destinations) => Dispatch<Action>
  handleLoading: () => Dispatch<Action>
  loading: boolean
  isFormOpen: boolean
  handleFormOpeningClosing: () => Dispatch<Action>
  saveDestinationForm: (destination: Destination) => Dispatch<Action>
}