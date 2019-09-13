import { Component } from '@angular/core';

export interface ITask {
	title: string;
	complete: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';
  tasks: ITask[] = [
  {
  	title: 'молоко',
  	complete: false
  },
  {
  	title: 'хлеб',
  	complete: true
  },
  {
  	title: 'масло',
 	complete: false
 	}	
  ];
 }