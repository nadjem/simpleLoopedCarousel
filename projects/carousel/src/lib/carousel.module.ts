import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselModule { }
