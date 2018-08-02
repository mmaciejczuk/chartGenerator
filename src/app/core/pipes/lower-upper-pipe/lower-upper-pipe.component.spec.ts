import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerUpperPipeComponent } from './lower-upper-pipe.component';

describe('LowerUpperPipeComponent', () => {
  let component: LowerUpperPipeComponent;
  let fixture: ComponentFixture<LowerUpperPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerUpperPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerUpperPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
