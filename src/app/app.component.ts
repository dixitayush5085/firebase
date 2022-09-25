import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebase';
  list!: any;
  todo!: string;
  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getAll().forEach((item) => {
        this.list = item;
    });
  }

  addToTodoList() {
    let todo = {
      title: this.todo
    };
    this.appService.createTodo(todo);
    this.todo = "";
  }

}
