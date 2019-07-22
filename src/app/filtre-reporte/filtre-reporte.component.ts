import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtre-reporte',
  templateUrl: './filtre-reporte.component.html',
  styleUrls: ['./filtre-reporte.component.css']
})
export class FiltreReporteComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit() {
  }

}
