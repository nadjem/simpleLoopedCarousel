# Simple Looped Carousel Angular

## Install

   
```console
npm i simpleloopedcarousel --save
```

## import module

  ```javascript
  /**
   * app.module.ts
   */
   import { NgModule } from '@angular/core';
   ...
   import {CarouselModule} from 'simpleloopedcarousel';
   ...
   imports: [
      ...
       CarouselModule
     ], 
   
  ```

## use it

```javascript
<nad-carousel [inputDelay]="10"  [inputDataPhoto]="photoArray" ></nad-carousel>
```

| Option        | Value         |
| ------------- |:-------------:|
| inputDelay    | in second | 
| inputDataPhoto     | urls array [ ]*     |
 
\*exemple:
```
let photoArray = [
 'https://cdn.pixabay.com/photo/2018/08/04/07/38/printing-3583294_1280.jpg', 
 'https://cdn.pixabay.com/photo/2018/07/20/22/43/adler-3551609_1280.jpg',
 'https://cdn.pixabay.com/photo/2018/07/29/21/32/wildflowers-3571119_1280.jpg', 
 'https://cdn.pixabay.com/photo/2018/07/28/19/57/lunar-eclipse-3568835_1280.jpg',
 'https://cdn.pixabay.com/photo/2018/07/06/17/29/lily-3520837_1280.jpg'
 ]
```
