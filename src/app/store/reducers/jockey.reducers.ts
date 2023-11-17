import { createReducer, on } from "@ngrx/store";
import { addJockey, removeJockey } from "../actions/jockey.actions";
import { Jockey } from "src/app/models/jockey.model";

export interface JockeyState {
    jockeys: Jockey[]
}

export const initialState: JockeyState = {
    jockeys: []
}

export const jockeyReducer = createReducer(
    initialState,

    on(addJockey, (state, { name }) => ({
        ...state,
        jockeys: [...state.jockeys, {id: Date.now().toString(), name: name, timeStamp: Date.now().toString()}]
    })),

    on(removeJockey, (state, { id }) => ({
        ...state,
        jockeys: state.jockeys.filter((jockey) => jockey.id !== id)
    }))
)