import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";
import {HomeRoutingModule} from "./pages/home.routing";
import {AuthRoutingModule} from "./auth/auth.routing";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
