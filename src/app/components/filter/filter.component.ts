import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() selectedFilterEmiter = new EventEmitter();
  selectedFilter: any;
  dropdownValues = [
    { id: true, name: 'Completed' },
    { id: false, name: 'In Complete' },
  ];
  constructor() {
    this.selectedFilter =  this.dropdownValues[0];
  }

  ngOnInit(): void {
  }

  onDropdownChange() {
    this.selectedFilterEmiter.emit(this.selectedFilter);
  }
}
