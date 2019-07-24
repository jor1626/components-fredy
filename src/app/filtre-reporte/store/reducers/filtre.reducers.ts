import { FiltreClass } from './../../models/filtre';
import * as fromFilter from "./../actions/filter.actions";

export interface FiltreSate {
    filters: FiltreClass[],
    loaded: boolean,
    loading: boolean,
    error: any
}

const estadoInicial: FiltreSate = {
    filters: [],
    loaded: false,
    loading: false,
    error: null
}

export function filtreReducers(state = estadoInicial, Actions: fromFilter.Actions): FiltreSate {

    switch (Actions.type) {

        case fromFilter.LISTAR_FILTRO:
            return {
                ...state,
                loading: true
            };

        case fromFilter.LISTAR_FILTRO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                filters: [ ...Actions.filters ]
            };

        case fromFilter.LISTAR_FILTRO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: Actions.payload
            };

        default:
            return state;
    }

}