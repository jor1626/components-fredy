import { Injectable } from '@angular/core';
import * as filtersActions from "./../actions/filter.actions";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
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
        switchMap(() => {
            return this.filtreService.getFiltros().pipe(
                map(filters => {
                    new filtersActions.ListarFiltroSuccess(filters)
                    console.log(filters)
                })
            )
        })
    );

}