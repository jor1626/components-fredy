import { Action } from '@ngrx/store';
import { GrupoClass } from 'src/app/models/grupo.model';

export const LISTAR_VALORES = '[VALORES] Listar Valores';
export const LISTAR_VALORES_SUCCESS = '[VALORES] Listar Valores Success';
export const LISTAR_VALORES_FAIL = '[VALORES] Listar Valores Fail';

export class listarValoresAction implements Action {
    readonly type = LISTAR_VALORES;
}

export class listarValoresSuccessAction implements Action {
    readonly type = LISTAR_VALORES_SUCCESS;

    constructor(public valores: GrupoClass[]) { }
}

export class listarValoresFailAction implements Action {
    readonly type = LISTAR_VALORES_FAIL;

    constructor(public payload: any) { }
}

export type ActionsValores = listarValoresAction | listarValoresSuccessAction | listarValoresFailAction;