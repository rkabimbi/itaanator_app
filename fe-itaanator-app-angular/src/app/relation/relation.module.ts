import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRelationsComponent } from './list-relations/list-relations.component';
import { RouterModule, Routes } from '@angular/router';
import { RelationComponent } from './relation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



const routes: Routes = [
  {path:'list-relations',component:ListRelationsComponent},
  {path:'relation',component:RelationComponent},]

@NgModule({
  declarations: [
    ListRelationsComponent,
    RelationComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
    
  ]
})
export class RelationModule { }
