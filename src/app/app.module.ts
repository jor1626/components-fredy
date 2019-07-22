import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltreReporteComponent } from './filtre-reporte/filtre-reporte.component';

import { MatButtonToggleModule, MatButtonModule, MatDatepickerModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerToggle, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      FiltreReporteComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatInputModule,
      MatSelectModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule

   ],
   providers: [
      MatDatepickerModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
