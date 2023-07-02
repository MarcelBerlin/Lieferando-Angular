import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderSectionComponent } from './order-section/order-section.component';
import { FahrerComponent } from './fahrer/fahrer.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'order', component: OrderSectionComponent },
  { path: 'fahrer', component: FahrerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
