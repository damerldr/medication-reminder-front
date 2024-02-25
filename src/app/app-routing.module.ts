// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from '../register/register/register.component';
import { MedicationListComponent } from '../medication/medication-list/medication-list.component';
import { MedicationFormComponent } from '../medication/medication-form/medication-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'medications-list', component: MedicationListComponent },
  { path: 'medications-form', component: MedicationFormComponent },
  

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' } // Redirect to login if route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
