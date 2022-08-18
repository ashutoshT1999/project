import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveAskComponent } from './dialog-save-ask.component';

describe('DialogSaveAskComponent', () => {
  let component: DialogSaveAskComponent;
  let fixture: ComponentFixture<DialogSaveAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSaveAskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSaveAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
