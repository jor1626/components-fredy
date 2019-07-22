import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltreReporteComponent } from './filtre-reporte/filtre-reporte.component';


const routes: Routes = [{
  path: '', component: FiltreReporteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
