import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotePage } from './note.page';
import { QuillModule } from 'ngx-quill';

const routes: Routes = [
  {
    path: '',
    component: NotePage
  }
];

const toolbarOptions = [
  ['bold', 'italic', 'underline'],
  ['blockquote'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot({
      placeholder: 'Start writing',
      modules: {
        toolbar: toolbarOptions
      }
    })
  ],
  declarations: [NotePage]
})
export class NotePageModule {}
