import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

  images:any ;
  selectedImage:any;

  constructor(private cd: ChangeDetectorRef) {
    this.images = [
      'http://i.ytimg.com/vi/3-NTv0CdFCk/hqdefault.jpg',
      'http://i.ytimg.com/vi/P9zYSBK7Blw/hqdefault.jpg',
      'http://i.ytimg.com/vi/Bag1gUxuU0g/hqdefault.jpg',
      'http://i.ytimg.com/vi/jq30l5-vBbo/hqdefault.jpg',
      'http://i.ytimg.com/vi/QnxpHIl5Ynw/hqdefault.jpg',
      'http://i.ytimg.com/vi/UTDtPg-tBGQ/hqdefault.jpg',
      'http://i.ytimg.com/vi/Py_-3di1yx0/hqdefault.jpg',
      'http://i.ytimg.com/vi/o_1aF54DO60/hqdefault.jpg',
      'http://i.ytimg.com/vi/JRWox-i6aAk/hqdefault.jpg',
      'http://i.ytimg.com/vi/oKxuiw3iMBE/hqdefault.jpg',
      'http://i.ytimg.com/vi/cE6wxDqdOV0/hqdefault.jpg',
      'http://i.ytimg.com/vi/sxDdEPED0h8/hqdefault.jpg',
      'http://i.ytimg.com/vi/jbEg7Eipp-s/hqdefault.jpg',
      'http://i.ytimg.com/vi/chsnOSzLjJk/hqdefault.jpg',
      'http://i.ytimg.com/vi/bJlQA6ug3Jg/hqdefault.jpg',
      'http://i.ytimg.com/vi/TdrL3QxjyVw/hqdefault.jpg',
      'http://i.ytimg.com/vi/T5xcnjAG8pE/hqdefault.jpg',
      'http://i.ytimg.com/vi/J85ciCj0DOI/hqdefault.jpg',
      'http://i.ytimg.com/vi/rJABBmAMXnY/hqdefault.jpg',
      'http://i.ytimg.com/vi/L6K8Uq88BEQ/hqdefault.jpg',
      'http://i.ytimg.com/vi/ZFWC4SiZBao/hqdefault.jpg',
      'http://i.ytimg.com/vi/03OuK5-83t4/hqdefault.jpg',
      'http://i.ytimg.com/vi/se_Wqk0bdUk/hqdefault.jpg',
      'http://i.ytimg.com/vi/-Pa4ldoJYzs/hqdefault.jpg'
    ]
    console.log('CarouselComponent contructor')
  }

  ngOnInit() {
  }

  setSelectedImage(image){
    //console.log(image);
    this.selectedImage= image;
  }

}
