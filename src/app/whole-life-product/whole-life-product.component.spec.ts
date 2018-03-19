import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeLifeProductComponent } from './whole-life-product.component';

describe('WholeLifeProductComponent', () => {
  let component: WholeLifeProductComponent;
  let fixture: ComponentFixture<WholeLifeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeLifeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeLifeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
