import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermLifeProductComponent } from './term-life-product.component';

describe('TermLifeProductComponent', () => {
  let component: TermLifeProductComponent;
  let fixture: ComponentFixture<TermLifeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermLifeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermLifeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
