import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesidecombComponent } from './piecesidecomb.component';

describe('PiecesidecombComponent', () => {
  let component: PiecesidecombComponent;
  let fixture: ComponentFixture<PiecesidecombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesidecombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesidecombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
