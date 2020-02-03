import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesidereldistComponent } from './piecesidereldist.component';

describe('PiecesidereldistComponent', () => {
  let component: PiecesidereldistComponent;
  let fixture: ComponentFixture<PiecesidereldistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesidereldistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesidereldistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
