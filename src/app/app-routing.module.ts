import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ALRComponent } from './alr/alr.component';
import { HomeComponent } from './home/home.component';
import { USMComponent } from './usm/usm.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "usm", component:USMComponent },
  {path: "alr", component:ALRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
