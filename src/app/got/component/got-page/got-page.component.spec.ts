import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotPageComponent } from './got-page.component';

describe('GotPageComponent', () => {
  let component: GotPageComponent;
  let fixture: ComponentFixture<GotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
