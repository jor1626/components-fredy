import { Action } from '@ngrx/store';

export const GENERAR_REPORTE = '[GENERAR_REPORTE] Generar reporte';
export const GENERAR_REPORTE_SUCCESS = '[GENERAR_REPORTE_SUCCESS] Generar reporte success';
export const GENERAR_REPORTE_FAIL = '[GENERAR_REPORTE_FAIL] Generar reporte fail';

export class GenerarReporteAction implements Action {
    readonly type = GENERAR_REPORTE;
    constructor(public data: any){}
}

export class GenerarReporteActionSuccess implements Action {
    readonly type = GENERAR_REPORTE_SUCCESS;
    constructor(public data: any){}
}

export class GenerarReporteActionFail implements Action {
    readonly type = GENERAR_REPORTE_FAIL;
    constructor(public data: any){}
}

export type actionsReport = GenerarReporteAction | GenerarReporteActionSuccess | GenerarReporteActionFail;