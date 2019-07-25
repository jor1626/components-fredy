import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltreReporteComponent } from './filtre-reporte/filtre-reporte.component';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';
import { EstadoResultadoComponent } from './estado-resultado/estado-resultado.component';


const routes: Routes = [
  { path: '', component: FiltreReporteComponent },
  { path: 'balance-general', component: BalanceGeneralComponent },
  { path: 'informe-pyg', component: EstadoResultadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
