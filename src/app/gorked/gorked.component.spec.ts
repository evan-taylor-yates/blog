import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorkedComponent } from './gorked.component';

describe('GorkedComponent', () => {
  let component: GorkedComponent;
  let fixture: ComponentFixture<GorkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
