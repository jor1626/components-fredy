import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromFilter from './store/actions/filter.actions';

@Component({
  selector: 'app-filtre-reporte',
  templateUrl: './filtre-reporte.component.html',
  styleUrls: ['./filtre-reporte.component.css']
})
export class FiltreReporteComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private strore: Store<AppState>) {

  }

  ngOnInit() {
    const action = new fromFilter.ListarFiltroAction();

    this.strore.dispatch(action);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
