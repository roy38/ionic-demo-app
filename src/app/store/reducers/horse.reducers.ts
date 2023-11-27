import { createReducer, on } from "@ngrx/store";
import { addHorse, updateHorse, removeHorse } from "../actions/horse.actions";
import { Horse } from "src/app/models/horse.model";

export interface HorseState {
    horses: Horse[]
}

export const initialState: HorseState = {
    horses: []
}

export const horseReducer = createReducer(
    initialState,

    on(addHorse, (state, { name, typeIs }) => ({
        ...state,
        horses: [...state.horses, {id: Date.now().toString(), name: name, typeIs: typeIs, timeStamp: Date.now().toString()}]
    })),

    on(updateHorse, (state, { item }) => ({
        ...state,
        horses: state.horses.map((horse) => horse.id === item.id ? item : horse)
    })),

    on(removeHorse, (state, { id }) => ({
        ...state,
        horses: state.horses.filter((horse) => horse.id !== id)
    }))
)