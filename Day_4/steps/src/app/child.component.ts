import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  // inputs:["quantity"],
  template:`
  <div style="border: 2px solid red;padding:10px" >
    <h1>Child Component</h1>
    <ng-content></ng-content>
    <h3>Quantity Count:{{quantity}}</h3>
    <input #ti type="text" [value]='title'>
    <button (click)="clickHandler(ti.value)">Click</button>
  </div>
  `
})
export class ChildComponent {
  title = '';
  @Input() quantity:number=0;
  @Output() childEvent:EventEmitter<any> = new EventEmitter();
  clickHandler(message:any){
    //alert("You click the button");
    this.childEvent.emit(message);
  }
}
