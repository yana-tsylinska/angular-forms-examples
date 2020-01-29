import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionReactiveFormComponent } from './subscription-reactive-form.component';

describe('SubscriptionReactiveFormComponent', () => {
  let component: SubscriptionReactiveFormComponent;
  let fixture: ComponentFixture<SubscriptionReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
