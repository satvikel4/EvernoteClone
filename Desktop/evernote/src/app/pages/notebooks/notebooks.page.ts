import { NotebookService, Notebook } from './../../services/notebook.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { NotebookCreateModalPage } from '../notebook-create-modal/notebook-create-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.page.html',
  styleUrls: ['./notebooks.page.scss'],
})
export class NotebooksPage implements OnInit {
  notebooks: Observable<Notebook[]>;
  @Input() isModal: boolean;
  @Input() currentSelected: Notebook;
  
  constructor(private notebookService: NotebookService, private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.loadNotebooks();
  }

  loadNotebooks() {
    if (this.isModal) {
      this.notebooks = this.notebookService.getNotebookList();
    } else {
      this.notebooks = this.notebookService.getNotebooks();
    }
  }

  async addNotebook() {
    const modal = await this.modalCtrl.create({
      component: NotebookCreateModalPage
    });
    modal.present();
  }

  openNotebook(notebook) {
    console.log('please open: ', notebook);

    if (this.isModal) {
      this.modalCtrl.dismiss({
        selected: notebook
      });
    } else {
      this.router.navigateByUrl(`/app/notebooks/${notebook.id}`);
    }
  }

  filterNotebooks(e) {
    let filter = e.detail.value;
    console.log('filter: ', filter);

    if (filter == '') {
      this.loadNotebooks();
    } else {
      this.notebooks = this.notebookService.getNotebooksFiltered(filter);
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
