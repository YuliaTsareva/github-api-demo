import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

import { AuthService } from './auth/auth.service';
import logoIcon from '!!raw-loader!./icons/logo.svg';

@Component({
  selector: 'gh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoIcon = logoIcon;
  topic: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.route.queryParams
      .debounceTime(50) // there should be a better solution
      .subscribe(() => {
        this.topic = this.route.snapshot.queryParams['topic'];
      });
  }

  updateTopicQuery(topic: string) {
    const queryParams = {topic};

    this.router.navigate(['./'], {queryParams});
  }

  signIn() {
    this.authService.signIn();
  }
}
