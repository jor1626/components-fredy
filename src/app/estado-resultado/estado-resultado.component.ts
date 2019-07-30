import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GrupoClass } from './../models/grupo.model';

import { Store } from '@ngrx/store';
import { AppState } from './../app.reducers';
import * as fromNiveles from './../store/actions/nivel.actions';
import * as fromValores from './../store/actions/valor.actions';
import * as fromCentros from './../store/actions/centro.actions';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-estado-resultado',
  templateUrl: './estado-resultado.component.html',
  styleUrls: ['./estado-resultado.component.css']
})
export class EstadoResultadoComponent implements OnInit {
  formData: FormGroup;
  nivelesList: GrupoClass[];
  valoresList: GrupoClass[];
  centrosList: GrupoClass[];
  public now = new Date();
  fechaI = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
  fechaF = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() + 30);
  chartOption1: EChartOption;
  chartOption2: EChartOption;
  chartOption3: EChartOption;

  chartOption: EChartOption;


  //AutoComplete material

  filterCentrosInicial: Observable<GrupoClass[]>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.nivelesList = [];
    this.valoresList = [];
    this.centrosList = [];

    this.chartOption1 = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }

    this.chartOption2 = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }

    this.chartOption3 = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }
  }

  ngOnInit() {
    this.formData = this.fb.group({
      nivelList: ['', Validators.required],
      fechaCorteInicialTxt: [this.fechaI, Validators.required], 
      fechaCorteFinalTxt: [this.fechaF, Validators.required],
      valorExpresadoList: ['', Validators.required],
      centroCostosList: ['', Validators.required],
      filtrocentroCostoTxt: [''],
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
