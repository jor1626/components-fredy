import { GrupoClass } from './../../models/grupo.model';
import * as fromGrupo from "./../actions/grupo.actions";

export interface GrupoState {
    grupos: GrupoClass[],
    loaded: boolean,
    loading: boolean,
    error: any
}

const estadoInicial: GrupoState = {
    grupos: [],
    loaded: false,
    loading: false,
    error: null
}

export function gruposReducer(state = estadoInicial, Actions: fromGrupo.ActionsGrupo): GrupoState {

    switch (Actions.type) {

        case fromGrupo.LISTAR_GRUPO:
            return {
                ...state,
                loading: true
            };

        case fromGrupo.LISTAR_GRUPO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                grupos: Actions.grupos
            };

        case fromGrupo.LISTAR_GRUPO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: Actions.payload.status,
                    message: Actions.payload.message,
                    url: Actions.payload.url,
                }
            };

        default:
            return state;
    }

}