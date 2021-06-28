import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookCreateModalPage } from './notebook-create-modal.page';

describe('NotebookCreateModalPage', () => {
  let component: NotebookCreateModalPage;
  let fixture: ComponentFixture<NotebookCreateModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookCreateModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookCreateModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
