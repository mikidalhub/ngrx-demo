import { Component, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hslider',
  templateUrl: './hslider.component.html',
  styleUrls: ['./hslider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HsliderComponent {

  constructor() {
    console.log('HsliderComponent contructor')
  }


}
