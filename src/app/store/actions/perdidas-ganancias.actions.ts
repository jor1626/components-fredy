import { Action } from '@ngrx/store';

export const LISTAR_PERDIDAS_GANANCIAS = '[PERDIDAS_GANANCIAS] Listar PerdidasGanancias';
export const LISTAR_PERDIDAS_GANANCIAS_SUCCESS = '[PERDIDAS_GANANCIAS] Listar PerdidasGanancias Success';
export const LISTAR_PERDIDAS_GANANCIAS_FAIL = '[PERDIDAS_GANANCIAS] Listar PerdidasGanancias Fail';
export const REPORTE_PYG = '[REPORTE_PYG] Reporte PYG';

export class PerdidasGananciasAction implements Action {
    readonly type = LISTAR_PERDIDAS_GANANCIAS;
}

export class PerdidasGananciasSuccessAction implements Action {
    readonly type = LISTAR_PERDIDAS_GANANCIAS_SUCCESS;

    constructor(public data: any[]) { }
}

export class PerdidasGananciasFailAction implements Action {
    readonly type = LISTAR_PERDIDAS_GANANCIAS_FAIL;

    constructor(public payload: any) { }
}

export class ReportePYGAction implements Action {
    readonly type = REPORTE_PYG;

    constructor(public data: any) { }
}

export type ActionsPerdidasGanancias = PerdidasGananciasAction | PerdidasGananciasSuccessAction | PerdidasGananciasFailAction | ReportePYGAction;