import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldShitComponent } from './old-shit.component';

describe('OldShitComponent', () => {
  let component: OldShitComponent;
  let fixture: ComponentFixture<OldShitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldShitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldShitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
