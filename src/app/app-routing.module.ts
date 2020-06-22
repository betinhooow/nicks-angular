import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';

const routes: Routes = [
  { path: '', component: ContatoFormComponent },
  { path: 'carverify/:id', component: ContatoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
