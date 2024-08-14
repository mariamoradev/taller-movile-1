import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { CardComponent } from '../card/card.component';

const routes: Routes =[
  { path: '', component: TaskPage}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TaskPageRoutingModule,
    RouterModule.forChild(routes)

  ],
  declarations: [TaskPage, CardComponent]
})
export class TaskPageModule {}
