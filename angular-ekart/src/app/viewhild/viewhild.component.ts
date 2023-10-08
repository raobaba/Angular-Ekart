import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-viewhild',
  templateUrl: './viewhild.component.html',
  styleUrls: ['./viewhild.component.css']
})
export class ViewhildComponent {
  title = 'angular-view-children';
  fullName: string = '';
  @ViewChildren('inputEl', {}) inputElements: QueryList<ElementRef>;

  show(){
    let name = ''
    this.inputElements.forEach((el) => {
      name += el.nativeElement.value + ' '
    })
    this.fullName = name.trim();
  }
}
