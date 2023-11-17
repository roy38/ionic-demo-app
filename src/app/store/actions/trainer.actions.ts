import { createAction, props } from "@ngrx/store";

export const addTrainer = createAction('[Item] Add to trainer', props<{name: string}>())

export const removeTrainer = createAction('[Item] Remove from trainer', props<{id: string}>())