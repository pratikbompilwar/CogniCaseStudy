import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './Components/cars/cars.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cars', component: CarsComponent}
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
