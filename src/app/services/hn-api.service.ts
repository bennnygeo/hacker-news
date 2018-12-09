import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http'

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

// import { Observable } from 'rxjs';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class HnApiService {

  baseURL: string;

  constructor(
    private http: HttpClient
  ) {
    // this.baseURL = 'https://hacker-news.firebaseio.com/v0';
    this.baseURL = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    // return this.http.get(`${this.baseURL}/topstories.json`).map(res => res.json())
    // debugger;
    return this.http.get(`${this.baseURL}/${storyType}?page=${page}`)
      .pipe(map((res) => res));
  }

  fetchItem(id: number): Observable<any> {
    // debugger;
    return this.http.get(`${this.baseURL}/item/${id}.json`).pipe(map((res) => res));
  }

  fetchComments(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/item/${id}`).pipe(map((res) => res));
  }
}
