import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableIiComponent } from './create-observable-ii.component';

describe('CreateObservableIiComponent', () => {
  let component: CreateObservableIiComponent;
  let fixture: ComponentFixture<CreateObservableIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObservableIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObservableIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
