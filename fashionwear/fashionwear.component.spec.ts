import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionwearComponent } from './fashionwear.component';

describe('FashionwearComponent', () => {
  let component: FashionwearComponent;
  let fixture: ComponentFixture<FashionwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionwearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
