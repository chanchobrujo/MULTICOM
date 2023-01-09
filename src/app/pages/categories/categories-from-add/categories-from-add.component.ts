import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-categories-from-add',
  templateUrl: './categories-from-add.component.html',
  styleUrls: ['./categories-from-add.component.scss']
})
export class CategoriesFromAddComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  add() {
    this.close();
  }

  close() {
    this.bsModalRef.hide();
  }

}
