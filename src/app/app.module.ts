import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltreReporteComponent } from './filtre-reporte/filtre-reporte.component';

import { MatButtonModule, MatDatepickerModule ,MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      FiltreReporteComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MatButtonModule,
      MatInputModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatDatepickerModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
