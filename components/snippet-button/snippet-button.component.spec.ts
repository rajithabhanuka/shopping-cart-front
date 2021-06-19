import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetButtonComponent } from './snippet-button.component';

describe('SnippetButtonComponent', () => {
  let component: SnippetButtonComponent;
  let fixture: ComponentFixture<SnippetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnippetButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
