import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFromAddComponent } from './categories-from-add.component';

describe('CategoriesFromAddComponent', () => {
  let component: CategoriesFromAddComponent;
  let fixture: ComponentFixture<CategoriesFromAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFromAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFromAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
