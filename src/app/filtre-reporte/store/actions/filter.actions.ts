import { Action } from '@ngrx/store';
import { FiltreClass } from './../../models/filtre';

export const LISTAR_FILTRO = "[FILTRO] Listar";
export const LISTAR_FILTRO_SUCCESS = "[FILTRO] Correcto Listar";
export const LISTAR_FILTRO_FAIL = "[FILTRO] Fallo listar";

export class ListarFiltroAction implements Action {
    readonly type = LISTAR_FILTRO;
}

export class ListarFiltroSuccess implements Action {
    readonly type = LISTAR_FILTRO_SUCCESS;
    constructor(public filters: FiltreClass[]) { }
}

export class ListarFiltroFailAction implements Action {
    readonly type = LISTAR_FILTRO_FAIL;
    constructor(public payload: any) { }
}

export type Actions = ListarFiltroAction | ListarFiltroSuccess | ListarFiltroFailAction;