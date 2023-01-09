import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/ui/modal/modal.service";
import {CategoriesFromAddComponent} from "./categories-from-add/categories-from-add.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  async modalForAdd(): Promise<void> {
    await this.modalService.showAsync(CategoriesFromAddComponent, {
      class: 'modal-dialog-centered modal-size-7',
      initialState: {}
    })
  }

}
