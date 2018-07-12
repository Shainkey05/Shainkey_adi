import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items = ['Java', 'Ruby', 'Python'];
  newItem = '';
   localTodos: any;
  emptyArr: any = [] ;

  pushItem = function() {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.localTodos = localStorage.getItem('Todos');
      // console.log('this.localTodos', this.localTodos);
       this.emptyArr.push(this.newItem);
       if (this.localTodos !== null) {
         this.emptyArr.push(this.localTodos);
       }
       localStorage.setItem('Todos', this.emptyArr);

      this.newItem = '';
    }
  };
  removeItem = function(index) {
    this.items.splice(index, 1);
  };


  constructor() { }

  ngOnInit() {
    this.localTodos = localStorage.getItem('Todos');
    console.log('localstorage ', this.localTodos );
    if (this.localTodos) {
      console.log('localstorage have some values');
      this.items.push(this.localTodos);
    }
  }

}
