import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  source:string = '/assets/shopping.jpg';
  getSlogan(){
    return 'This is a new slogan for this web application';
  }
}
