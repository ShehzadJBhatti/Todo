import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
constructor(){
  this.todos = [
    
    {
    sno: 1,
    title: "This is Title 1",
    desc: "Description 1",
    active: true,
  },
  {
    sno : 2,
    title: "This is Title 2",
    desc: "Description 2",
    active: true,
  },
  {
    sno: 3,
    title: "This is Title 3",
    desc: "Description 3",
    active: true,
  },

  ]

} 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  deleteTodo(todo:Todo){
console.log(todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index,1);
  }

  addTodo(todo:Todo){
    console.log(todo); 
    this.todos.push(todo);
      }
}
