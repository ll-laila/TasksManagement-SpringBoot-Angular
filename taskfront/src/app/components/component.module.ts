import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './task/list/list.component';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddComponent } from './task/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './task/show/show.component';
import { DoneComponent } from './task/done/done.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    NavigationComponent,
    AddComponent,
    ShowComponent,
    DoneComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    AppRoutingModule,
    NavigationComponent,
    ReactiveFormsModule,
  ],
})
export class ComponentModule {}
