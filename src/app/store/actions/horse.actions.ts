import { createAction, props } from "@ngrx/store";

export const addHorse = createAction('[Item] Add to horse', props<{name: string}>())

export const updateHorse = createAction('[Item] Add to horse', props<{item: any}>())

export const removeHorse = createAction('[Item] Remove from horse', props<{id: string}>())