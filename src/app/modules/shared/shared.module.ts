import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/input/input.component';




@NgModule({
  declarations: [CustomInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
  , exports: [
    CustomInputComponent
  ]
})
export class SharedModule { }
