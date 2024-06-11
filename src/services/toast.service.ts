import { MutableRefObject } from "react";

export class ToastService {
  private ref!:  MutableRefObject<null>;
  constructor(ref:MutableRefObject<any> ) {
    this.ref = ref;
  }

  success(message: string, life: number = 3000) {
    (<any>this.ref).current.show({ severity: 'success', summary: 'Well done!', detail: message, life });
  }

  info(message: string, life: number = 6000) {
    (<any>this.ref).current.show({ severity: 'info', summary: 'Hi there!', detail: message, life });
  }

  warning(message: string, life: number = 6000) {
    (<any>this.ref).current.show({ severity: 'Warning!', summary: 'Well done!', detail: message, life });
  }

  error(message: string, life: number = 6000) {
    (<any>this.ref).current.show({ severity: 'info', summary: 'Oh snap!', detail: message, life });
  }
}