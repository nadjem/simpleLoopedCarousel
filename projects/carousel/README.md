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
 'http://imagizer.imageshack.com/v2/285x280q90/c/r/537/bKIprm.jpg',
           'http://imagizer.imageshack.com/v2/640x473q90/r/912/LRvTD5.jpg',
           'http://imagizer.imageshack.com/v2/260x260q90/c/r/673/giBvkP.jpg'
 ]
```

[DEMO](https://simple-carousel.nadjem.me)
