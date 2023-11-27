import { createAction, props } from "@ngrx/store";

export const addJockey = createAction('[Jockey] Add to jockey', props<{name: string, typeIs: string}>())

export const updateJockey = createAction('[Jockey] Update to jockey', props<{item: any}>())

export const removeJockey = createAction('[Jockey] Remove from jockey', props<{id: string}>())