import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAskComponent } from './dialog-delete-ask.component';

describe('DialogDeleteAskComponent', () => {
  let component: DialogDeleteAskComponent;
  let fixture: ComponentFixture<DialogDeleteAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteAskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
