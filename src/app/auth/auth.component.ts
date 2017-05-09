import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../github.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isAuthorized = true;

    this.authService.getAccessToken(this.route.snapshot.queryParams['code'])
      .subscribe(() => {
        this.router.navigate(['/']);
        // this.githubService.getUser()
        //   .subscribe(user => {
        //     console.log('user', user);
        //     this.router.navigate(['/']);
        //   })
      }, () => {
        this.authService.isAuthorized = false;
      });
  }
}
