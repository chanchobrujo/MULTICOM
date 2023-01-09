import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesFromAddComponent } from './categories/categories-from-add/categories-from-add.component';
import {ModalModule} from "ngx-bootstrap/modal";
@NgModule({
  declarations: [HomeComponent, CategoriesComponent, CategoriesFromAddComponent],
  exports: [HomeComponent, CategoriesComponent],
  imports: [CommonModule, RouterModule]
})
export class HomeModule { }
