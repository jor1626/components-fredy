
import { ActionReducerMap } from '@ngrx/store';

// State and Reducers
import { gruposReducer, GrupoState } from './store/reducers/grupo.reducers';
import { BodegaState, bodegasReducer } from './store/reducers/bodega.reducers';
import { NivelState, nivelesReducers } from './store/reducers/nivel.reducers';
import { ValorState, valoresReducers } from './store/reducers/valor.reducers';
import { CentroState, centrosReducer } from './store/reducers/centro.reducers';
import { PerdidasGananciasState, perdidasGananciasReducers } from './store/reducers/perdidas-ganancias.reducers';
import { ReporteState, reporteReducers } from './store/reducers/reporte.reducers';

//Effects
import { FilterEffectsService } from './store/effects/filter.effects';

export interface AppState {
    grupos: GrupoState;
    bodegas: BodegaState;
    niveles: NivelState;
    valores: ValorState;
    centros: CentroState;
    perdidasGanancias: PerdidasGananciasState;
    reporte: ReporteState;
};

export const appReducers: ActionReducerMap<AppState> = {
    grupos: gruposReducer,
    bodegas: bodegasReducer,
    niveles: nivelesReducers,
    valores: valoresReducers,
    centros: centrosReducer,
    perdidasGanancias: perdidasGananciasReducers,
    reporte: reporteReducers
}

export const effectsArray: any[] = [FilterEffectsService];