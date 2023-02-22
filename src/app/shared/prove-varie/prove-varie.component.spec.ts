import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveVarieComponent } from './prove-varie.component';

describe('ProveVarieComponent', () => {
  let component: ProveVarieComponent;
  let fixture: ComponentFixture<ProveVarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveVarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveVarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
