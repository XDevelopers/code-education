import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
 
    tasks = [];
    task:Task = {
        name: '',
        value: 0
    };

    add() {
        // Copia a instacia do this.task para a variavel 'task' recem criada com let;
        let  task = Object.assign({}, this.task);
        this.tasks.push(task);
    }
}