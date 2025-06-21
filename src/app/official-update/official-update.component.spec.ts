import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialUpdateComponent } from './official-update.component';

describe('OfficialUpdateComponent', () => {
  let component: OfficialUpdateComponent;
  let fixture: ComponentFixture<OfficialUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficialUpdateComponent]
    });
    fixture = TestBed.createComponent(OfficialUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
