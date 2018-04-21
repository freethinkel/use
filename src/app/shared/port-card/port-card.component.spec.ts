import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCardComponent } from './port-card.component';

describe('PortCardComponent', () => {
  let component: PortCardComponent;
  let fixture: ComponentFixture<PortCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
