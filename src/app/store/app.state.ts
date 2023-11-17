import { FavoriteState } from "./reducers/favorite.reducers";
import { HorseState } from "./reducers/horse.reducers";
import { JockeyState } from "./reducers/jockey.reducers";
import { TrainerState } from "./reducers/trainer.reducers";

export interface AppState {
    favorites: FavoriteState
    horses: HorseState
    jockeys: JockeyState
    trainers: TrainerState
}