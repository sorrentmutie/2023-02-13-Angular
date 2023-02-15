import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePageComponent } from './reactive-page.component';

describe('ReactivePageComponent', () => {
  let component: ReactivePageComponent;
  let fixture: ComponentFixture<ReactivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
