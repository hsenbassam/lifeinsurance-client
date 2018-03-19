import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationSelectComponent } from './occupation-select.component';

describe('OccupationSelectComponent', () => {
  let component: OccupationSelectComponent;
  let fixture: ComponentFixture<OccupationSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
