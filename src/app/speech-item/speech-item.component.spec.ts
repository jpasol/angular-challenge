import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechItemComponent } from './speech-item.component';

describe('SpeechItemComponent', () => {
  let component: SpeechItemComponent;
  let fixture: ComponentFixture<SpeechItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
