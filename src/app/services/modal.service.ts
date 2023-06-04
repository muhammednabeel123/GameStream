import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false  

  constructor() { }


  isModelOpen(){
    return this.visible
  }

  toggleModal(){
    this.visible = !this.visible
  }
}
