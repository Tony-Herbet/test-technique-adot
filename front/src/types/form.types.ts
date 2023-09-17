import { Action, Dispatch } from "redux";
import { Destination, Destinations } from ".";

export interface FormProps {
  destinationForm: Destination
  handleFormOpeningClosing: () => Dispatch<Action>
  saveDestinationForm: (destination: Destination | Record<string, never>) => Dispatch<Action>
  destinations: Array<Destination>,
  saveDestinations: (destinations: Destinations) => Dispatch<Action>
}