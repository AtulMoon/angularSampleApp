import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news:any;
  constructor(private httServices: HttpService) { }

  ngOnInit(): void {
    this.httServices.getNews().subscribe(data => {
      this.news = data
      console.log(this.news)
    })
  }

}
