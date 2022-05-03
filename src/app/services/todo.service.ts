import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }
  getTodo(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
