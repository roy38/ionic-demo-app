import { createAction, props } from "@ngrx/store";

export const addJockey = createAction('[Item] Add to jockey', props<{name: string}>())

export const updateJockey = createAction('[Item] Add to jockey', props<{item: any}>())

export const removeJockey = createAction('[Item] Remove from jockey', props<{id: string}>())