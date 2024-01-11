import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeUserComponent } from './list-type-user.component';

describe('ListTypeUserComponent', () => {
  let component: ListTypeUserComponent;
  let fixture: ComponentFixture<ListTypeUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTypeUserComponent]
    });
    fixture = TestBed.createComponent(ListTypeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
