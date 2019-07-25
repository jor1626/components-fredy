import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromGrupo from '../store/actions/grupo.actions';
import { GrupoClass } from '../models/grupo.model';
import { BodegaClass } from '../models/bodegas.model';

@Component({
  selector: 'app-filtre-reporte',
  templateUrl: './filtre-reporte.component.html',
  styleUrls: ['./filtre-reporte.component.css']
})
export class FiltreReporteComponent implements OnInit {
  startDate = new Date();
  fechaCorteTxt = new FormControl();
  grupoInicialTxt = new FormControl();
  grupoFinalTxt = new FormControl();
  existenciaTxt = new FormControl();
  bodegasTxt = new FormControl();
  tipoTxt = new FormControl();

  grupos: GrupoClass[] = [];
  bodegas: BodegaClass[] = [];
  existencias: GrupoClass[] = [];
  filterGrupoInicial: Observable<GrupoClass[]>;
  filterGrupoFinal: Observable<GrupoClass[]>;
  filterExistencia: Observable<GrupoClass[]>;
  filterBodegas: Observable<BodegaClass[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new fromGrupo.ListarGrupoAction());

    this.store.select('grupos').subscribe(state => console.log(state.grupos));

  }

  ngOnInit() {



    this.filterGrupoInicial = this.grupoInicialTxt.valueChanges.pipe(
      startWith(''),
      map(value => this._filtroGrupo(value))
    );

    // this.filterExistencia = this.existenciaTxt.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filterExitencia(value))
    // );

    // this.filterBodegas = this.bodegasTxt.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filterBodega(value))
    // );
  }

  private _filtroGrupo(value: string): GrupoClass[] {
    const filterValue = value.toLowerCase();

    return this.grupos.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  private _filterExitencia(value: string): GrupoClass[] {
    const filterValue = value.toLowerCase();

    return this.existencias.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  private _filterBodega(value: string): GrupoClass[] {
    const filterValue = value.toLowerCase();

    return this.bodegas.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

}
