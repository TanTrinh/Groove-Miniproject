import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { GgmapComponent } from './ggmap/ggmap.component';
import { RequestComponent } from './request/request.component';
import { DetailComponent } from './detail/detail.component';
import { ProblemComponent } from './problem/problem.component';
import { TrafficjamComponent } from './trafficjam/trafficjam.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [{
      path: 'request', component: RequestComponent, children: [
        { path: 'detail', component: DetailComponent },
        { path: 'problem', component: ProblemComponent },
        { path: 'trafficjam', component: TrafficjamComponent }]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
