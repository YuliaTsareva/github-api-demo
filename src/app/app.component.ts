import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import { GithubService } from './github.service';
import { Repository } from './model/repository';
import logoIcon from '!!raw-loader!./icons/logo.svg';

const DEFAULT_TRENDING_TOPIC = 'open source';

@Component({
  selector: 'gh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoIcon = logoIcon;
  topic: string;
  trendingText: string;
  searchInProgress: boolean;
  repositories: Repository[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private githubService: GithubService) {
  }

  ngOnInit() {
    this.route.queryParams
      .debounceTime(50) // there should be a better solution
      .subscribe(() => {
        this.updateSelectedTopic();
      });
  }

  updateTopicQuery(topic: string) {
    const queryParams = {topic};

    this.router.navigate(['./'], {queryParams});
  }

  private updateSelectedTopic() {
    this.topic = this.route.snapshot.queryParams['topic'];

    this.searchRepositories();
  }

  private searchRepositories() {
    this.searchInProgress = true;

    this.trendingText = this.topic || DEFAULT_TRENDING_TOPIC;
    this.repositories = [];

    this.githubService.getPopularRepositories(this.topic)
      .subscribe(response => {
          this.repositories = response.items;

          this.repositories.forEach(repository => {
            repository.created_at = new Date(repository.created_at);
          });
        },
        () => {},
        () => {
          this.searchInProgress = false;
        });
  }
}
