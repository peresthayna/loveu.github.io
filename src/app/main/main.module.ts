import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    FormsModule
  ]
})
export class MainModule { }
