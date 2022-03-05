import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { USMComponent } from './usm/usm.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "usm", component:USMComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
