import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableIiiComponent } from './create-observable-iii.component';

describe('CreateObservableIiiComponent', () => {
  let component: CreateObservableIiiComponent;
  let fixture: ComponentFixture<CreateObservableIiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObservableIiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObservableIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
