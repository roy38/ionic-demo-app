import { createReducer, on } from "@ngrx/store";
import { addTrainer, updateTrainer, removeTrainer } from "../actions/trainer.actions";
import { Trainer } from "src/app/models/trainer.model";

export interface TrainerState {
    trainers: Trainer[]
}

export const initialState: TrainerState = {
    trainers: []
}

export const trainerReducer = createReducer(
    initialState,

    on(addTrainer, (state, { name, typeIs }) => ({
        ...state,
        trainers: [...state.trainers, {id: Date.now().toString(), name: name, typeIs: typeIs, timeStamp: Date.now().toString()}]
    })),

    on(updateTrainer, (state, { item }) => ({
        ...state,
        trainers: state.trainers.map((trainer) => trainer.id === item.id ? item : trainer)
    })),

    on(removeTrainer, (state, { id }) => ({
        ...state,
        trainers: state.trainers.filter((trainer) => trainer.id !== id)
    }))
)