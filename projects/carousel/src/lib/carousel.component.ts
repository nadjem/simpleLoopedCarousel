import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nad-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() inputDataPhoto;
  @Input() inputDelay;
  @Input() inputControl = false;


  public photosData: any = [{}];
  public isActive = 0;
  public isNext = 0;
  public isPrev = 0;
  constructor() { }


  ngOnInit() {
    console.log(this.inputDataPhoto);

    if (this.inputDataPhoto.length < 3) {
      for (let i = 0 ; i < 2; i++) {
        this.inputDataPhoto.push(this.inputDataPhoto[i]);
        this.inputDelay = this.inputDelay / 2;
      }
    }
    if (this.inputDataPhoto.length < 2) {
      for (let i = 0 ; i < 2; i++) {
        this.inputDataPhoto.push(this.inputDataPhoto[i]);
        this.inputDelay = this.inputDelay / 2;
      }
    }
    for (let i = 0; i < this.inputDataPhoto.length; i++) {
      console.log(i);
      if (i === 0) {
        this.isActive = 0;
        this.photosData[i] = {
          active: true,
          next: false,
          prev: false,
          url: this.inputDataPhoto[i],
          index: i
        };

      } else if (i === 1) {
        this.isNext = 1;
        this.photosData[i] = {
          active: false,
          next: true,
          prev: false,
          url: this.inputDataPhoto[i],
          index: i
        };
      } else if (i === (this.inputDataPhoto.length - 1)) {
        this.isPrev = this.inputDataPhoto.length - 1;
        this.photosData[i] = {
          active: false,
          next: false,
          prev: true,
          url: this.inputDataPhoto[i],
          index: i
        };
      } else {
        this.photosData[i] = {
          active: false,
          next: false,
          prev: false,
          url: this.inputDataPhoto[i],
          index: i
        };
      }

    }
    console.log(this.photosData);

    setInterval(() => {
      this.moveNext();
    }, (this.inputDelay * 1000) + 3000);
  }

  moveNext() {



    console.log(this.photosData);



    if (this.isPrev === this.photosData.length - 1) {
      this.isPrev = 0;
    } else {
      this.isPrev += 1;
    }
    if (this.isNext === this.photosData.length - 1) {
      this.isNext = 0;
    } else {
      this.isNext += 1;
    }
    if (this.isActive === this.photosData.length - 1) {
      this.isActive = 0;
    } else {
      this.isActive += 1;
    }

    this.photosData[this.isActive].active = true;
    this.photosData[this.isActive].next = false;
    this.photosData[this.isActive].prev = false;

    this.photosData[this.isNext].next = true;
    this.photosData[this.isNext].active = false;
    this.photosData[this.isNext].prev = false;

    this.photosData[this.isPrev].prev = true;
    this.photosData[this.isPrev].active = false;
    this.photosData[this.isPrev].next = false;

  }
}
