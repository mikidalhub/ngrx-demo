import { Component, Input,Output, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';

/** app/components/proximity-selector.component.ts **/
@Component({
  selector: 'proximity-selector',
  template: `
    <div class="input-group">
        <label for="useLocation">Use current location</label>
        <input type="checkbox"
            [disabled]="disabled"
            (change)="onLocation($event)">
    </div>
    <div class="input-group">
        <label for="locationRadius">Radius</label>
        <input type="range" min="1" max="100" value="50"
            [disabled]="!active"
            (change)="onRadius($event)">
    </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
/** app/components/proximity-selector.component.ts **/
export class SearchProximityComponent {

  @Output() getLocation = new EventEmitter();
  @Output() getRadius = new EventEmitter();

  @Input()
  disabled: boolean;

  active = false;

  constructor(private cd: ChangeDetectorRef) {}

  onLocation($event: any) {
    this.active = $event.target.checked;
    this.getLocation.emit( this.active);
  }

  onRadius($event: any) {
    const radius = parseInt($event.target.value, 10);
    this.getRadius.emit( radius );
  }

}