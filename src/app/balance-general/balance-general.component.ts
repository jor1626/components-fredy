import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GrupoClass } from '../models/grupo.model';

import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromNiveles from './../store/actions/nivel.actions';
import * as fromValores from './../store/actions/valor.actions';
import * as fromCentros from './../store/actions/centro.actions';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-balance-general',
  templateUrl: './balance-general.component.html',
  styleUrls: ['./balance-general.component.css']
})
export class BalanceGeneralComponent implements OnInit {
  formData: FormGroup;
  nivelesList: GrupoClass[];
  valoresList: GrupoClass[];
  centrosList: GrupoClass[];


  //AutoComplete material

  filterCentrosInicial: Observable<GrupoClass[]>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.nivelesList = [];
    this.valoresList = [];
    this.centrosList = [];
  }

  ngOnInit() {
    this.formData = this.fb.group({
      nivelList: ['', Validators.required],
      fechaCorteTxt: [new Date(), Validators.required],
      valorExpresadoList: ['', Validators.required],
      centroCostosList: ['', Validators.required]
    });

    //Exec actions store
    this.store.dispatch(new fromNiveles.listarNivelesAction());
    this.store.dispatch(new fromValores.listarValoresAction());
    this.store.dispatch(new fromCentros.ListarCentrosActions());


    //Load state
    this.store.select('niveles').subscribe(state => this.nivelesList = state.niveles);
    this.store.select('valores').subscribe(state => this.valoresList = state.valores);
    this.store.select('centros').subscribe(state => {
      this.centrosList = state.centros;
      this.filterCentrosInicial = this.formData.get('centroCostosList').valueChanges.pipe(
        startWith(''),
        map(value => this._filtroCentro(value))
      );
    });
  }

  _filtroCentro(data: string): GrupoClass[] {
    const filterValue = data.toLowerCase();

    return this.centrosList.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }
}
