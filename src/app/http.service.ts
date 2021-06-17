import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_KEY = 'e47424fb019549c8a2f3ab80192eafac';
   proxyUrl = "https://cors-anywhere.herokuapp.com/"
 qInTitle = "";
 from = "";
 apiKey = "";
 url = `${this.proxyUrl}https://newsapi.org/v2/everything?qInTitle=${this.qInTitle}&from=${this.from}language=en&apiKey=${this.apiKey}`;
  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('Hey, Whats up!!');
  }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

getUser(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getNews(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`); 
   // return this.http.get(this.url); 
  }
} 
