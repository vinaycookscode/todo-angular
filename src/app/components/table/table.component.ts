import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'table-comp',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() isCompleted: boolean = true;
  allData: ITodo[] = [];
  todoList: ITodo[] = [];
  constructor( private todoService: TodoService) { }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['isCompleted']) {
      this.filterData(simpleChanges['isCompleted'].currentValue);
    }
    console.log(simpleChanges['isCompleted'].currentValue);
  }
  ngOnInit(): void {
    this.todoService.getTodo().subscribe( (data: ITodo[]) => {
      this.allData = data;
      this.todoList = data.filter( (currentTodo: ITodo) => { return currentTodo.completed === this.isCompleted });
    });
  }

  filterData(isCompleted: boolean): void {
     this.todoList = this.allData.filter( (currentTodo: ITodo) => { return currentTodo.completed === isCompleted });
  }
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}
