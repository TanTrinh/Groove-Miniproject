import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficjamComponent } from './trafficjam.component';

describe('TrafficjamComponent', () => {
  let component: TrafficjamComponent;
  let fixture: ComponentFixture<TrafficjamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficjamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficjamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
