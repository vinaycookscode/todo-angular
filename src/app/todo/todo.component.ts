import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  isCompleted = true;
  constructor() { }

  ngOnInit(): void {
  }

  setSelectedFilter(selectedFilter: any) {
    this.isCompleted = selectedFilter;
  }
}
