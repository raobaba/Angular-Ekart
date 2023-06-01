import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
   <div>
  
   <h1>Main Component</h1>
   <app-child [quantity]="count" (childEvent)="childClickHandler($event)">
   <h3>Heading 1</h3>
   <h4>Heading 2</h4>  
   <p>{{title}}</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
   <button>Click Me</button>
   <h1 >Message:{{message}} </h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus debitis labore minus aliquid quaerat illo, provident suscipit! Minus atque tempore quibusdam debitis qui nihil quae at quasi totam. Doloremque.
   </p>
   </app-child>
   <button (click)="count = count+1">Increase Count </button>
   </div>
  `
})
export class AppComponent {
  title = 'Child Application';
  message='';
  count:number = 0;
  childClickHandler(message:any){
    alert(message)
    this.message = message;
  }
}
