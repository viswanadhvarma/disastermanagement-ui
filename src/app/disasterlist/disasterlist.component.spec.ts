import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterlistComponent } from './disasterlist.component';

describe('DisasterlistComponent', () => {
  let component: DisasterlistComponent;
  let fixture: ComponentFixture<DisasterlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisasterlistComponent]
    });
    fixture = TestBed.createComponent(DisasterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
