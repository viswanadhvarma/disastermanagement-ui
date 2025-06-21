import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ResourceComponent } from './resource/resource.component';
import { DisasterlistComponent } from './disasterlist/disasterlist.component';
import { ReportsComponent } from './reports/reports.component';
import { OfficialUpdateComponent } from './official-update/official-update.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
    
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'resource',
    component:ResourceComponent
  },
  {
    path:'disasterlist',
    component:DisasterlistComponent
  },
  {
    path:'reports',
    component:ReportsComponent
  },
  {
    path:'OfficialUpdates',
    component:OfficialUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
