import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// NGRX
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { appReducers } from './app.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltreReporteComponent } from './filtre-reporte/filtre-reporte.component';

import { MatButtonToggleModule, MatButtonModule, MatDatepickerModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerToggle, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FilterEffectsService } from './filtre-reporte/store/effects/filter.effects';

@NgModule({
   declarations: [
      AppComponent,
      FiltreReporteComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
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
      MatIconModule,
      StoreModule.forRoot(appReducers),
      StoreDevtoolsModule.instrument({
         maxAge: 25,
         logOnly: environment.production
      }),
      EffectsModule.forRoot([
         FilterEffectsService
      ])
   ],
   providers: [
      MatDatepickerModule,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
