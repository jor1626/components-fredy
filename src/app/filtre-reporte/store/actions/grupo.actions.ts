import { Action } from '@ngrx/store';
import { GrupoClass } from '../../models/grupo.model';

export const LISTAR_GRUPO = "[GRUPO] Listar";
export const LISTAR_GRUPO_SUCCESS = "[GRUPO] Correcto Listar";
export const LISTAR_GRUPO_FAIL = "[GRUPO] Fallo listar";

export class ListarGrupoAction implements Action {
    readonly type = LISTAR_GRUPO;
}

export class ListarGrupoSuccess implements Action {
    readonly type = LISTAR_GRUPO_SUCCESS;
    constructor(public grupos: GrupoClass[]) { }
}

export class ListarGrupoFailAction implements Action {
    readonly type = LISTAR_GRUPO_FAIL;
    constructor(public payload: any) { }
}

export type ActionsGrupo = ListarGrupoAction | ListarGrupoSuccess | ListarGrupoFailAction;