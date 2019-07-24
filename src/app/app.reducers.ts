
import { grupoReducer, GrupoState } from './filtre-reporte/store/reducers/grupo.reducers';
import { BodegaState, bodegaReducer } from './filtre-reporte/store/reducers/bodega.reducers';

import { GrupoEffectsService } from './filtre-reporte/store/effects/grupo.effects';
import { BodegaEffectsService } from './filtre-reporte/store/effects/bodega.effects';

export const effectsArray: any[] = [GrupoEffectsService, BodegaEffectsService];

import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    grupos: GrupoState;
    bodegas: BodegaState;
};

export const appReducers: ActionReducerMap<AppState> = {
    grupos: grupoReducer,
    bodegas: bodegaReducer
}