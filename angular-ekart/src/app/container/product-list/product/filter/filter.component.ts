import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() All: number = 0;
  @Input() InStock: number = 0;
  @Input() OutOfStock: number = 0;
  @Output() selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
 
  selectedFilterRadioButton: string = 'All';

  onSelectedFilterRadioButtonChanged() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
