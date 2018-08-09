import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerryDetailsComponent } from './ferry-details.component';

describe('FerryDetailsComponent', () => {
  let component: FerryDetailsComponent;
  let fixture: ComponentFixture<FerryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
