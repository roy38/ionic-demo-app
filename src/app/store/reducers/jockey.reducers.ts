import { createReducer, on } from "@ngrx/store";
import { addJockey, updateJockey, removeJockey } from "../actions/jockey.actions";
import { Jockey } from "src/app/models/jockey.model";

export interface JockeyState {
    jockeys: Jockey[]
}

export const initialState: JockeyState = {
    jockeys: []
}

export const jockeyReducer = createReducer(
    initialState,

    on(addJockey, (state, { name, typeIs }) => ({
        ...state,
        jockeys: [...state.jockeys, {id: Date.now().toString(), name: name, typeIs: typeIs, timeStamp: Date.now().toString()}]
    })),

    on(updateJockey, (state, { item }) => ({
        ...state,
        jockeys: state.jockeys.map((jockey) => jockey.id === item.id ? item : jockey)
    })),

    on(removeJockey, (state, { id }) => ({
        ...state,
        jockeys: state.jockeys.filter((jockey) => jockey.id !== id)
    }))
)