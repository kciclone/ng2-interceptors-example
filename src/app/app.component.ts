import { Component, OnInit } from '@angular/core';
import { UserService } from './services/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  pagedItems: any[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll()
      .subscribe(data => {
        // set items to json response
        this.pagedItems = data.result.users;
      });
  }
}
