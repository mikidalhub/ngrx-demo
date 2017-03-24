import { Observable } from 'rxjs/Rx';
import { Component, Input, Output, ElementRef, EventEmitter  } from '@angular/core';

@Component({
    selector: 'search-box',
    template: `
    <input type="text" #videoName class="form-control" placeholder="Search" autofocus>
   `
})
export class SearchBoxComponent {

    @Output() getText = new EventEmitter();

    constructor( private el: ElementRef ) {}

    ngOnInit(): void {

        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e: any) => e.target.value)
            .debounceTime(350)
            .subscribe((text: string) => {
                    this.getText.emit(text);
                }
            );
    }
}