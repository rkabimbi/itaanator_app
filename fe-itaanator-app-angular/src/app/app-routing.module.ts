import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ListRelationsComponent } from './list-relations/list-relations.component';
import { RelationComponent } from './relation/relation.component';
import { Route404Component } from './route404/route404.component';

const routes: Routes = [

  {path:'',redirectTo:'list-relations',pathMatch:'full'},
  {path:'**',component:Route404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
