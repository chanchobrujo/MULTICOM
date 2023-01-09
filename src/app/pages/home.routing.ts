import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'categories', component: CategoriesComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
