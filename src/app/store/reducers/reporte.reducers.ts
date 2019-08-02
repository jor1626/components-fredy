import * as actionsReports from './../actions/reporte.actions';

export interface ReporteState {
    data: any[],
    loading: boolean,
    loaded: boolean,
    errors: any
}

const stateInitial: ReporteState = {
    data: [],
    loading: false,
    loaded: false,
    errors: null
}

export function reporteReducers(state = stateInitial, action: actionsReports.actionsReport): ReporteState {
    switch (action.type) {
        case actionsReports.GENERAR_REPORTE:
            
            return {
                ...state,
                loading: true
            };

        case actionsReports.GENERAR_REPORTE_SUCCESS:
            
            return{
                ...state,
                loaded: true,
                loading: false,
                data: action.data
            };

        case actionsReports.GENERAR_REPORTE_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                errors: {
                    status: action.data.status,
                    message: action.data.message,
                    url: action.data.url,
                }
            };
    
        default:
            return state;
    }
}