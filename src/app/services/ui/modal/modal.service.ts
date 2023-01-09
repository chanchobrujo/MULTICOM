import { Injectable, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private bsModalRef: BsModalRef, private service: BsModalService) {
  }

  private customConfig(data = null): ModalOptions {
    return {
      class: 'modal-dialog-centered',
      ignoreBackdropClick: true,
      backdrop: 'static',
      keyboard: false,
      initialState: {data}
    };
  }

  showAsync(content: any, config?: ModalOptions): Promise<any> {
    return new Promise<boolean>(((resolve, reject) => {
      this.bsModalRef = this.service.show(content, {...this.customConfig(), ...config});
      if (this.bsModalRef.content && this.bsModalRef.content.onDismiss) {
        this.bsModalRef.content.onDismiss.subscribe((value: boolean | PromiseLike<boolean>) => resolve(value));
      } else if (this.bsModalRef.content && this.bsModalRef.content.onConfirm) {
        this.bsModalRef.content.onConfirm.subscribe((value: boolean | PromiseLike<boolean>) => resolve(value));
      } else if (this.bsModalRef.content && this.bsModalRef.content.onNotification) {
        this.bsModalRef.content.onNotification.subscribe((value: boolean | PromiseLike<boolean>) => resolve(value));
      } else if (this.bsModalRef.content && this.bsModalRef.content.onSelectedOption) {
        this.bsModalRef.content.onSelectedOption.subscribe((value: boolean | PromiseLike<boolean>) => resolve(value));
      }
    }));
  }
}
