import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalLifeProductComponent } from './universal-life-product.component';

describe('UniversalLifeProductComponent', () => {
  let component: UniversalLifeProductComponent;
  let fixture: ComponentFixture<UniversalLifeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalLifeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalLifeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
