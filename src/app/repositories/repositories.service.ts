import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class RepositoriesService {
    accessToken: string;

    constructor(private http: Http,
                private authService: AuthService) {
    }

    getPopularRepositories(topic: string): Observable<any> {
        const createdFrom = moment().subtract(30, 'day').format('YYYY-MM-DD');
        let query = `created:>${createdFrom}`;

        if (topic) {
            query += `+topic:${topic}`;
        }

        const headers = this.createHeaders();

        return this.http.get(`https://api.github.com/search/repositories?q=${query}&sort=stars`, {headers})
            .map(response => response.json());
    }

    getRepository(url: string): Observable<any> {
        const headers = this.createHeaders();

        headers.append('Accept', 'application/vnd.github.mercy-preview+json');

        return this.http.get(url, {headers})
            .map(response => response.json());
    }

    getUser(): Observable<any> {
        const headers = this.createHeaders();

        return this.http.get('https://api.github.com/user', {headers})
            .map(response => response.json());
    }

    private createHeaders() {
        const headers = new Headers();

        if (this.authService.isAuthorized) {
            headers.append('Authorization', 'token ' + this.authService.accessToken);
        }

        return headers;
    }
}
