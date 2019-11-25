import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleOperatorDemoComponent } from './simple-operator-demo.component';

describe('SimpleOperatorDemoComponent', () => {
  let component: SimpleOperatorDemoComponent;
  let fixture: ComponentFixture<SimpleOperatorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleOperatorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleOperatorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
