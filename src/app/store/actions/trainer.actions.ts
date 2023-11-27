import { createAction, props } from "@ngrx/store";

export const addTrainer = createAction('[Trainer] Add to trainer', props<{name: string, typeIs: string}>())

export const updateTrainer = createAction('[Trainer] Update to trainer', props<{item: any}>())

export const removeTrainer = createAction('[Trainer] Remove from trainer', props<{id: string}>())