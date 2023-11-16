import { createAction, props } from "@ngrx/store";

export const addToFavorite = createAction('[Item] Add to favorite', props<{name: string}>())

export const removeFavorite = createAction('[Item] Remove from favorite', props<{id: string}>())