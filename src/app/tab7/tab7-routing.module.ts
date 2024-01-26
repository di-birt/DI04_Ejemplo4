import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from 'src/app/components/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/app/components/line-chart/line-chart.component';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';

import { Tab7Page } from './tab7.page';

const routes: Routes = [
  {
    path: '',
    component: Tab7Page,
    children:[
      { path: 'bar-chart', component: BarChartComponent },
      { path: 'line-chart', component: LineChartComponent },
      { path: 'pie-chart', component: PieChartComponent },
      { path: '', pathMatch: 'full', redirectTo: 'bar-chart' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab7PageRoutingModule {}
