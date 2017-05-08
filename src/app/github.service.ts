import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }

  getPopularRepositories(topic: string): Observable<any> {
    const createdFrom = moment().subtract(30, 'day').format('YYYY-MM-DD');
    let query = `created:>${createdFrom}`;

    if (topic) {
      query += `+topic:${topic}`;
    }

    return this.http.get(`https://api.github.com/search/repositories?q=${query}&sort=stars`)
      .map(response => response.json());
  }

  getRepository(url: string): Observable<any> {
    const headers = new Headers({'Accept': 'application/vnd.github.mercy-preview+json'});

    return this.http.get(url, {headers})
      .map(response => response.json());
  }
}
