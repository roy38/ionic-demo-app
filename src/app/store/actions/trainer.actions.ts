import { createAction, props } from "@ngrx/store";

export const addTrainer = createAction('[Item] Add to trainer', props<{name: string}>())

export const updateTrainer = createAction('[Item] Add to trainer', props<{item: any}>())

export const removeTrainer = createAction('[Item] Remove from trainer', props<{id: string}>())