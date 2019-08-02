import { GrupoClass } from 'src/app/models/grupo.model';
import * as fromPerdidasGanancias from './../actions/perdidas-ganancias.actions';


export interface PerdidasGananciasState {
    data: any[],
    loaded: boolean,
    loading: boolean,
    errors: any
}

const estadoInicial: PerdidasGananciasState = {
    data: [],
    loaded: false,
    loading: false,
    errors: null
}


export function perdidasGananciasReducers(state = estadoInicial, action: fromPerdidasGanancias.ActionsPerdidasGanancias): PerdidasGananciasState {
    switch (action.type) {
        case fromPerdidasGanancias.LISTAR_PERDIDAS_GANANCIAS:
            return {
                ...state,
                loading: true
            };

        case fromPerdidasGanancias.LISTAR_PERDIDAS_GANANCIAS_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                data: action.data
            };

        case fromPerdidasGanancias.LISTAR_PERDIDAS_GANANCIAS_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                errors: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url,
                }
            };

        default:
            return state;
    }
}