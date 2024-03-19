import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})

export class TodolistComponent{
  taskArray = [{taskName: 'Escovar os Dentes', isCompleted: false}]


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
  }

  onDelete(index: number){
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number){
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

}
