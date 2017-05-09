import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const CLIENT_ID = '3fd406edff49971df98e';
const CLIENT_SECRET = 'fc74e428a4fae6dd31dcdc3112151acd698dae4c';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

@Injectable()
export class AuthService {
  accessToken: string;
  isAuthorized: boolean = false;

  constructor(private http: Http) {
  }

  signIn() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=12345`;
  }

  getAccessToken(code: string) {
    const accessTokenParams = `client_id=${CLIENT_ID}&code=${code}&state=12345&client_secret=${CLIENT_SECRET}`;
    const accessTokenUrl=`https://github.com/login/oauth/access_token?${accessTokenParams}`;
    const headers = new Headers({'Accept': 'application/json'});

    return this.http.post(`${CORS_PROXY}${accessTokenUrl}`, null, {headers})
      .map(response => response.json())
      .map(response => {
        this.accessToken = response.access_token;
        this.isAuthorized = true;

        return response;
      });
  }
}
