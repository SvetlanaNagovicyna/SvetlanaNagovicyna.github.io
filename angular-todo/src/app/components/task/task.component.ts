import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../app.component';

@Component({
	selector: 'task',
	templateUrl: 'task.component.html',
 	 styleUrls: ['task.component.css'],
 	 moduleId: module.id
})

export class TaskComponent implements OnInit{
	@Input() item;
	@Input() tasks;
	@Input() index;

ngOnInit(){
	console.log(this);
}	

 add(title) {
 	this.tasks.push({
 	 title,
 	 complete: false
  	});
  }

  toggle(task: ITask) {
  	task.complete = !task.complete;
   };

   remove(ind: number) {
   	this.tasks.splice(ind, 1)
   }
}
