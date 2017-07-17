import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Steps with AngularJs';

  tasks = [];
  task = "";

  add(){
    this.tasks.push(this.task);
    this.task= "";
  }
}
