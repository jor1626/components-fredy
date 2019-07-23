
import * as reducers from './filtre-reporte/store/reducers/filtre.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    filters: reducers.FiltreSate;
};

export const appReducers: ActionReducerMap<AppState> = {
    filters: reducers.filtreReducers
}