import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule} from 'carousel';
import { AppComponent } from './app.component';
import { TestCarouselComponent } from './test/test-carousel/test-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCarouselComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
