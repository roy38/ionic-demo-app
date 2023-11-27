import { createAction, props } from "@ngrx/store";
import { Horse } from 'src/app/models/horse.model';
// import { Jockey } from 'src/app/models/jockey.model';
// import { Trainer } from 'src/app/models/trainer.model';

export const addHorse = createAction('[Horse] Add to Horse', props<{name: string, typeIs: string}>())

export const updateHorse = createAction('[Horse] Update to Horse', props<{item: any}>())

export const removeHorse = createAction('[Horse] Remove from Horse', props<{id: string}>())