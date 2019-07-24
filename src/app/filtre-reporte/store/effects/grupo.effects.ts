import { Injectable } from '@angular/core';
import * as gruposActions from "./../actions/grupo.actions";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FiltreService } from './../../filtre.service';

@Injectable()
export class GrupoEffectsService {

    constructor(
        private actions$: Actions,
        private filtreService: FiltreService
    ) { }

    @Effect()
    cargarGrupo$ = this.actions$.pipe(
        ofType(gruposActions.LISTAR_GRUPO),
        switchMap(() => {
            return this.filtreService.getGrupos().pipe(
                map(grupos => new gruposActions.ListarGrupoSuccess(grupos)),
                catchError(error => of(new gruposActions.ListarGrupoFailAction(error)))
            )
        })
    );

}