import { createAction, props } from "@ngrx/store";

export const addHorse = createAction('[Item] Add to horse', props<{name: string}>())

export const removeHorse = createAction('[Item] Remove from horse', props<{id: string}>())