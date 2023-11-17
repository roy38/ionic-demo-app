import { createReducer, on } from "@ngrx/store";
import { addTrainer, removeTrainer } from "../actions/trainer.actions";
import { Trainer } from "src/app/models/trainer.model";

export interface TrainerState {
    trainers: Trainer[]
}

export const initialState: TrainerState = {
    trainers: []
}

export const trainerReducer = createReducer(
    initialState,

    on(addTrainer, (state, { name }) => ({
        ...state,
        trainers: [...state.trainers, {id: Date.now().toString(), name: name, timeStamp: Date.now().toString()}]
    })),

    on(removeTrainer, (state, { id }) => ({
        ...state,
        trainers: state.trainers.filter((trainer) => trainer.id !== id)
    }))
)