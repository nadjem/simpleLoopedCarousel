import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Simple looped Carousel';
  public photoArray = ['../../../assets/imgs/photo1.jpeg', '../../../assets/imgs/photo2.jpg', '../../../assets/imgs/photo3.jpg'];
  public photoArray2 = ['https://cdn-images-1.medium.com/max/1920/1*vXjx4Y7EgQBwALkaeZJ0Cg.jpeg', 'https://i2.wp.com/techmoran.com/wp-content/uploads/2017/09/Mailbag-How-Do-You-Move-From-Quant-Developer-To-Quant-Trader.jpg?fit=1024%2C683&ssl=1']
}
