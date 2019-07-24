import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs'
import { FiltreService } from './../../filtre.service';
import * as fromBodegas from "./../actions/bodega.actions";

@Injectable()
export class BodegaEffectsService {

    constructor(
        private actions$: Actions,
        private filtreService: FiltreService
    ) { }

    @Effect()
    cargarBodegas$ = this.actions$.pipe(
        ofType(fromBodegas.LISTAR_BODEGAS),
        switchMap(() => {
            return this.filtreService.getBodegas().pipe(
                map(bodegas => new fromBodegas.ListarBodegasSuccessActions(bodegas)),
                catchError(error => of(new fromBodegas.ListarBodegasFailActions(error)))
            )
        })
    )

}