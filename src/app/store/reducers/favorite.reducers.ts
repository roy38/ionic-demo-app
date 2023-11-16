import { createReducer, on } from "@ngrx/store";
import { addToFavorite, removeFavorite } from "../actions/favorite.actions";
import { AppState } from "../app.state";
import { Favorite } from "src/app/pages/favorite/favorite.model";


export interface FavoriteState {
    favorites: Favorite[]
}

export const initialState: FavoriteState = {
    favorites: []
}

export const favoriteReducer = createReducer(
    initialState,

    on(addToFavorite, (state, { name }) => ({
        ...state,
        favorites: [...state.favorites, {id: Date.now().toString(), name: name}]
    })),

    on(removeFavorite, (state, { id }) => ({
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.id !== id)
    }))
)