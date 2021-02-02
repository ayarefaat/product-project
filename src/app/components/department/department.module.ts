import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'edit',component:EditComponent},
];

@NgModule({
  declarations: [CreateComponent, EditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class DepartmentModule { }
