import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  users: any;

  constructor(private httServices: HttpService) { }

  ngOnInit(): void {
    //this.httServices.myMethod();

    this.httServices.getUser().subscribe(data => {
      this.users = data
      console.log(this.users)
    })

/*
    this.httpService.makeRequest()
    .subscribe(
      result => {
        // Handle result
        console.log(result)
      },
      error => {
        this.errors = error;
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
    */

  }

}
