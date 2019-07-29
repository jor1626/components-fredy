import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// NGRX
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { appReducers, effectsArray } from './app.reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

// Librerias 
import { NgxEchartsModule } from 'ngx-echarts';
import { MatButtonToggleModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatNativeDateModule, MatSelectModule, MatIconModule } from '@angular/material';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';
import { EstadoResultadoComponent } from './estado-resultado/estado-resultado.component';
import { FiltreReporteComponent } from './filtre-reporte/filtre-reporte.component';
import { FiltreService } from './services/filtre.service';

@NgModule({
   declarations: [
      AppComponent,
      FiltreReporteComponent,
      BalanceGeneralComponent,
      EstadoResultadoComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NgxEchartsModule,
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
      EffectsModule.forRoot(effectsArray)
   ],
   providers: [
      MatDatepickerModule,
      FiltreService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
