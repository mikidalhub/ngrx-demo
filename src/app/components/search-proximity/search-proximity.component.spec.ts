import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProximityComponent } from './search-proximity.component';

describe('SearchProximityComponent', () => {
  let component: SearchProximityComponent;
  let fixture: ComponentFixture<SearchProximityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProximityComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProximityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
