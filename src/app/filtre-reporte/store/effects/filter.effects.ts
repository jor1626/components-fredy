import { Injectable } from '@angular/core';
import * as filtersActions from "./../actions/filter.actions";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FiltreService } from '../../filtre.service';
import { FiltreClass } from '../../models/filtre';

@Injectable()
export class FilterEffectsService {

    constructor(
        private actions$: Actions,
        private filtreService: FiltreService
    ) { }

    @Effect({ dispatch: false })
    cargarFiltros$ = this.actions$.pipe(
        ofType(filtersActions.LISTAR_FILTRO),
        mergeMap(() =>
            this.filtreService.getFiltros().pipe(
                map((filtros: FiltreClass[]) => filtros)
            )
        )
    );

}