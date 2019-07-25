import { Injectable } from '@angular/core';
import * as fromGrupos from "../actions/grupo.actions";
import * as fromBodegas from "../actions/bodega.actions";
import * as fromNiveles from "../actions/nivel.actions";
import * as fromValores from "../actions/valor.actions";
import * as fromCentros from "../actions/centro.actions";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FiltreService } from '../../services/filtre.service';

@Injectable()
export class FilterEffectsService {

    constructor(
        private actions$: Actions,
        private filtreService: FiltreService
    ) { }

    @Effect()
    cargarGrupos$ = this.actions$.pipe(
        ofType(fromGrupos.LISTAR_GRUPO),
        switchMap(() => {
            return this.filtreService.getGrupos().pipe(
                map(grupos => new fromGrupos.ListarGrupoSuccess(grupos)),
                catchError(error => of(new fromGrupos.ListarGrupoFailAction(error)))
            )
        })
    );

    @Effect()
    cargarBodegas$ = this.actions$.pipe(
        ofType(fromBodegas.LISTAR_BODEGAS),
        switchMap(() => {
            return this.filtreService.getBodegas().pipe(
                map(bodegas => new fromBodegas.ListarBodegasSuccessActions(bodegas)),
                catchError(error => of(new fromBodegas.ListarBodegasFailActions(error)))
            )
        })
    );


    @Effect()
    cargarNiveles$ = this.actions$.pipe(
        ofType(fromNiveles.LISTAR_NIVELES),
        switchMap(() => {
            return this.filtreService.getNiveles().pipe(
                map(nivel => new fromNiveles.listarNivelesSuccessAction(nivel)),
                catchError(error => of(new fromNiveles.listarNivelesFailAction(error)))
            )
        })
    );

    @Effect()
    cargarValores$ = this.actions$.pipe(
        ofType(fromValores.LISTAR_VALORES),
        switchMap(() => {
            return this.filtreService.getValores().pipe(
                map(nivel => new fromValores.listarValoresSuccessAction(nivel)),
                catchError(error => of(new fromValores.listarValoresFailAction(error)))
            )
        })
    );

    @Effect()
    cargarCentros$ = this.actions$.pipe(
        ofType(fromCentros.LISTAR_CENTROS),
        switchMap(() => {
            return this.filtreService.getCentros().pipe(
                map(nivel => new fromCentros.ListarCentrosSuccessActions(nivel)),
                catchError(error => of(new fromCentros.ListarCentrosFailActions(error)))
            )
        })
    );
}