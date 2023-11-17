import { createReducer, on } from "@ngrx/store";
import { addHorse, removeHorse } from "../actions/horse.actions";
import { Horse } from "src/app/models/horse.model";

export interface HorseState {
    horses: Horse[]
}

export const initialState: HorseState = {
    horses: []
}

export const horseReducer = createReducer(
    initialState,

    on(addHorse, (state, { name }) => ({
        ...state,
        horses: [...state.horses, {id: Date.now().toString(), name: name, timeStamp: Date.now().toString()}]
    })),

    on(removeHorse, (state, { id }) => ({
        ...state,
        horses: state.horses.filter((horse) => horse.id !== id)
    }))
)