import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
  
  @Output() addItemEvent = new EventEmitter();
  
  private counterId = 4;

  item:any={
    product:'',
    price:'',
    quantity:''
  }

  onSubmit(itemForm: NgForm):void{
    if(itemForm.valid){
      this.addItemEvent.emit({id: this.counterId, ... this.item});
      this.counterId++;
      this.item={
        product:'',
        price:'',
        quantity:''
      }
    }
    itemForm.reset();
    itemForm.resetForm();
  }

}
